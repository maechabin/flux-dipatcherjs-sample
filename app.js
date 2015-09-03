var Dispatcher = require("flux").Dispatcher;
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");
var React = require("react");

var testDispatcher = new Dispatcher();

var CHANGE_EVENT = 'change';

// action
var testAction = {
  test: function (val) {
    testDispatcher.dispatch({
      actionType: "test",
      value: val
    });
  }
};

// store
var _test = {value: null};

var TestStore = assign({}, EventEmitter.prototype, {
  getAll: function () {
    return _test;
  },
  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  dispatcherIndex: testDispatcher.register(function (payload) {
    if (payload.actionType === "test") {
      // console.log(payload.value);
      _test.value = payload.value;
      TestStore.emitChange();
    }
  })
});

// view
var TestApp = React.createClass({
  getInitialState: function () {
    return TestStore.getAll();
  },
  componentDidMount: function() {
    TestStore.addChangeListener(this._onChange);
  },
  render: function () {
    return (
      <div className="testApp">
        <TestForm />
        <TestDisplay data={this.state.value} />
      </div>
    );
  },
  _onChange: function() {
    this.setState(TestStore.getAll());
  }
});

var TestForm = React.createClass({
  send: function (e) {
    e.preventDefault();
    var val = React.findDOMNode(this.refs.val).value.trim();
    testAction.test(val);
    React.findDOMNode(this.refs.val).value = "";
    return;
  },
  render: function () {
    return (
      <form>
        <input type="text" ref="val" />
        <button onClick={this.send}>送信</button>
      </form>
    );
  }
});

var TestDisplay = React.createClass({
  render: function () {
    var message = this.props.data;
    return (
      <div>{message}</div>
    );
  }
});

React.render(
  <TestApp />,
  document.getElementById("content")
);
