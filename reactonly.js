var React = require("react");

var TestApp = React.createClass({
  getInitialState: function () {
    return {value: null};
  },
  getInputState: function (val) {
    this.setState({value: val});
  },
  render: function () {
    return (
      <div className="testApp">
        <TestForm onClickBtn={this.getInputState} />
        <TestDisplay data={this.state.value} />
      </div>
    );
  }
});

var TestForm = React.createClass({
  send: function (e) {
    e.preventDefault();
    var val = React.findDOMNode(this.refs.val).value.trim();
    this.props.onClickBtn(val);
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
