import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
// @ts-ignore
import R from 'res/R';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <>
        <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
          <Text>{this.props.title}</Text>
        </TouchableOpacity>
      </>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: R.colors.blue,
    marginBottom: 20,
    padding: 10,
    borderRadius: 20,
  },
});
