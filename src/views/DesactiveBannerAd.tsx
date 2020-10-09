import React from 'react';
import Button from '../components/button';


interface LoginProps {
  login: () => void;
}

export default class DesactiveBannerAd extends React.Component<LoginProps> {
  render() {
    return (
      <>
        <Button title={'Fermé'} onPress={this.props.login} />
      </>
    );
  }
}
