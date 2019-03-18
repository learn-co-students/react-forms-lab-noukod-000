import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value:"",
      remainingCharacters:this.props.maxChars
    };
  }

  handleChange= event =>{
    const { maxChars }=this.props;
    const { value }=this.state;

    if(value.length < maxChars){
      this.setState({
        value: event.target.value,
        remainingCharacters: maxChars - event.target.value.length
      })
    }
    
  }

  render() {
    return (
      <div>
        <p>Remaining Characters:{this.state.remainingCharacters}</p>
        <strong>Your message:{this.state.value}</strong>
        <input value={this.state.value} onChange={this.handleChange} type="text" />
      </div>
    );
  }
}

export default TwitterMessage;
