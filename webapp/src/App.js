import React, { Component } from 'react';
import Name from './comp/Name';
import Age from './comp/Age';
import Exercise from './comp/Exercise';
import Workout from './comp/Workout';
import Edit from './comp/Edit';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      age:"",
      name:"",
      page:0
    }

    this.setName = this.setName.bind(this);
    this.setAge = this.setAge.bind(this);
    this.navigation = this.navigation.bind(this);
  }

  navigation(page) {
    this.setState({
      page:page
    });
  }

  setName(name) {
    this.setState({
      name:name
    })
  }

  setAge(age) {
    this.setState({
      age:age
    })
  }

  render() {

    var display = null;

    if (this.state.page === 0) {
      display =
        <div>
          <p>welcome</p>
          <br/>
          <button onClick={this.navigation.bind(this, 1)}>start</button>
        </div>
    } else if (this.state.page === 1) {

      display = <Name setName={this.setName} navigation={this.navigation}/>;
    } else if (this.state.page === 2) {

      display = <Age setAge={this.setAge} name={this.state.name} navigation={this.navigation}/>;
    } else if (this.state.page === 3) {

      display = <Exercise age={this.state.age} name={this.state.name} navigation={this.navigation}/>;
    } else if (this.state.page === 4) {

      display = <Workout navigation={this.navigation}/>;
    } else if (this.state.page === 5) {

      display = <Edit setAge={this.setAge} age={this.state.age} setName={this.setName} name={this.state.name}
navigation={this.navigation}/>
    } else {
      console.log("no page");
    }

    return (
      <div>
        {display}
      </div>
    );
  }
}

export default App;
