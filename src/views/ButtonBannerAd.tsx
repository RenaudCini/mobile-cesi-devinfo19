import React from 'react';
import Button from '../components/button';

interface LogoutProps {
  logout: () => void;
}

export default class ButtonBannerAd extends React.Component<LogoutProps> {
  render() {
    return (
      <>
        <Button title={'BannerAd'} onPress={this.props.logout} />
      </>
    );
  }
}
