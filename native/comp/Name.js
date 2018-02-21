import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Name extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name:""
    }

    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.submitName = this.submitName.bind(this);
  }

  nameChangeHandler(evt) {
    var name = evt;

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
      <View>
          <Text>whats your name</Text>
          <TextInput
            placeholder="name"
            onChangeText={this.nameChangeHandler}
          />
          <Button
            onPress={this.submitName}
            title="ok"
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
