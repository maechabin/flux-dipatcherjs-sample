var Dispatcher = require("flux").Dispatcher;
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");
var React = require("react");

var testDispatcher = new Dispatcher();

var CHANGE_EVENT = "change";
var testConstants = {
  TEST: "test"
};

// action
var TestAction = {
  test: function (testValue) {
    testDispatcher.dispatch({
      actionType: testConstants.TEST,
      value: testValue
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
    if (payload.actionType === testConstants.TEST) {
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
    var self = this;
    TestStore.addChangeListener(function () {
      self.setState(TestStore.getAll());
    });
  },
  render: function () {
    return (
      <div className="testApp">
        <TestForm />
        <TestDisplay data={this.state.value} />
      </div>
    );
  }
});

var TestForm = React.createClass({
  send: function (e) {
    e.preventDefault();
    var testValue = React.findDOMNode(this.refs.test_value).value.trim();
    TestAction.test(testValue);
    React.findDOMNode(this.refs.test_value).value = "";
    return;
  },
  render: function () {
    return (
      <form>
        <input type="text" ref="test_value" />
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
