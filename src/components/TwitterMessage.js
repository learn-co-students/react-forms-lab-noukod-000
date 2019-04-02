import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: '',
      maxChars: this.props.maxChars
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          maxLength={this.props.maxChars}
          onChange={event => this.handleChange(event)}
          value={this.state.msg}
        />
        {this.state.maxChars}
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({
      msg: e.target.value,
      maxChars: this.state.maxChars -1
    }, () => console.log(this.state))
  }
}

export default TwitterMessage;
