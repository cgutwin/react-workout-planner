import React, { Component } from 'react';

class Name extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name:""
    }

    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.submitName = this.submitName.bind(this);
  }

  nameChangeHandler(evt) {
    var name = evt.target.value;

    this.setState({
      name:name
    })
  }

  submitName() {
    this.props.setName(this.state.name);
    this.props.navigation(2);
  }

  render() {
    return (
      <div>
          <p>whats your name</p>
          <input type="text" placeholder="name" onChange={this.nameChangeHandler}/>
          <button onClick={this.submitName}>ok</button>
        </div>
    );
  }
}

export default Name;
