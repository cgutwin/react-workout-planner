import React, { Component } from 'react';

class Edit extends Component {

  constructor(props) {
    super(props);

    this.state = {
      age:0,
      allowed:null,
      name:""
    }

    this.ageHandler = this.ageHandler.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.ageCheck = this.ageCheck.bind(this);
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
      this.submitInfo();
    }
  }

  submitInfo() {
    this.props.setAge(this.state.age);
    this.props.setName(this.state.name);
    this.props.navigation(3);
  }

  nameChangeHandler(evt) {
    var name = evt.target.value;

    this.setState({
      name:name
    })
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
        <p>your current name: {this.props.name}</p>
        <p>your current age: {this.props.age}</p>
        <div>
          new name
          <input onChange={this.nameChangeHandler} type="text" placeholder="name"/>
        </div>
        <div>
          new age
          <input onChange={this.ageHandler} type="text" placeholder="age"/>
        </div>
        <button onClick={this.ageCheck}>return</button>
        {warning}
      </div>
    );
  }
}

export default Edit;
