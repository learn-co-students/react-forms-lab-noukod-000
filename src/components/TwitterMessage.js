import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      val: '',
      remainChars: this.props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState({
      val: e.target.value,
      remainChars: this.state.remainChars-1
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" maxlength={this.props.maxChars}
                  onChange={event => this.handleChange(event)}
                  value={this.state.val}/>
                  {this.state.remainChars}
      </div>
    );
  }
}

export default TwitterMessage;
