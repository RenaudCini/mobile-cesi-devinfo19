import React from 'react';
import {Text} from 'react-native';
import Button from '../components/button';
// @ts-ignore
import R from 'res/R';

interface LoginProps {
  login: () => void;
}

export default class Desactive extends React.Component<LoginProps> {
  render() {
    return (
      <>
        <Button title={'Desactivé'} onPress={this.props.login} />
      </>
    );
  }
}
