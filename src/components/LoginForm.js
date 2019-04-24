import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  alert('A password was submitted: ' + this.state.value);
  event.preventDefault();
}

  //
  // handleUsernameChange = event => {
  //   this.setState({
  //       username: event.target.value
  //   })
  // }

  // handlePasswordChange = event => {
  //   this.setState({
  //   password: event.target.value
  //   })
  // }

  handleChange= event => {
    this.setState({
      value: event.target.value,
    });

  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.value} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
