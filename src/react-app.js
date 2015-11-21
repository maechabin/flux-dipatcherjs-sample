var React = require("react");

var TestApp = React.createClass({
  getInitialState: function () {
    return {value: null};
  },
  setInputVal: function (testValue) {
    this.setState({value: testValue});
  },
  render: function () {
    return (
      <div className="testApp">
        <TestForm onClickBtn={this.setInputVal} />
        <TestDisplay data={this.state.value} />
      </div>
    );
  }
});

var TestForm = React.createClass({
  send: function (e) {
    e.preventDefault();
    var testValue = React.findDOMNode(this.refs.test_value).value.trim();
    this.props.onClickBtn(testValue);
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
