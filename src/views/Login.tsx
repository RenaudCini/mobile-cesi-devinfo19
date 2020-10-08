import React from 'react';
import {Text} from 'react-native';
import Button from '../components/button';
// @ts-ignore
import R from 'res/R';

interface LoginProps {
  login: () => void;
}

export default class Login extends React.Component<LoginProps> {
  render() {
    return (
      <>
        <Text>Login</Text>
        <Button title={'login'} onPress={this.props.login} />
      </>
    );
  }
}
