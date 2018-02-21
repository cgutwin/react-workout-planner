import React, { Component } from 'react';

class Age extends Component {

  constructor(props) {
    super(props);

    this.state = {
      age:0,
      allowed:null
    }

    this.ageHandler = this.ageHandler.bind(this);
    this.ageCheck = this.ageCheck.bind(this);
    this.submitAge = this.submitAge.bind(this);
  }

  ageHandler(evt) {
    var age = evt.target.value;

    this.setState({
      age:age
    })
  }

  ageCheck() {
    var age = parseInt(this.state.age);

    console.log(age);

    if (age <= 12) {
      this.setState({
        allowed:false
      })

      console.log("no");
    } else {
      console.log("yes");
      this.submitAge();
    }
  }

  submitAge() {
    this.props.setAge(this.state.age);
    this.props.navigation(3);
  }

  render() {

    var warning = null;

    if (this.state.allowed === false) {
      warning = <div>this isnt for you</div>

    } else {
      warning = null;
    }

    return (
      <div>
        <div>Hi {this.props.name}</div>
        <div>whats your age</div>
        <input onChange={this.ageHandler} type="text" placeholder="age"/>
        <button onClick={this.ageCheck}>ok</button>
        {warning}
      </div>
    );
  }
}

export default Age;
