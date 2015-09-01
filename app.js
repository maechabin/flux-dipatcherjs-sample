var Dispatcher = require("flux").Dispatcher;
var React = require("react");

var testDispatcher = new Dispatcher();


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
var testStore = {list: null};
testDispatcher.register(function (payload) {
  if (payload.actionType === "test") {
    alert(payload.value);
  }
});


// view
var TestBox = React.createClass({
  getInitialState() {
    return {
      value: ""
    };
  },
  render: function () {
    return (
      <div className="testBox">
        <TestForm data={this.state.value} />
      </div>
    );
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

React.render(
  <TestBox />,
  document.getElementById("content")
);
