import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

 
  handleSubmit = (event)=> {
    event.preventDefault();
    console.log('submitting')
    const name = this.state.username;
    const password = this.state.password;
    
    if (this.state.username && this.state.password) {
      this.props.onSubmit({username: name, password: password})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username:
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password:
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} required />
          </label>
        </div>
        <div>
          <button type="submit">LogIn</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;