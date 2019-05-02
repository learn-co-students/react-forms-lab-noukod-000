import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  //look for the value of name and change its state
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  //username and password fields must not be empty in order to be saved
  handleSubmit = event => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.onSubmit
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
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
