import React from 'react';
import Button from '../components/button';

interface LogoutProps {
  logout: () => void;
}

export default class Active extends React.Component<LogoutProps> {
  render() {
    return (
      <>
        <Button title={'Activé'} onPress={this.props.logout} />
      </>
    );
  }
}
