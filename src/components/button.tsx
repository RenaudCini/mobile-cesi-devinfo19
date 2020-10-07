import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
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
        <TouchableHighlight style={styles.button} onPress={this.props.onPress}>
          <Text>{this.props.title}</Text>
        </TouchableHighlight>
      </>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: R.colors.gold,
    padding: 20,
    borderRadius: 20,
  },
});
