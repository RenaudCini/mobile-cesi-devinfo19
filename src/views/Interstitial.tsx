import React from 'react';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from '@react-native-firebase/admob';
import Button from '../components/button';

const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

export default class Interstitial extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount(): void {
    interstitial.load();
    interstitial.onAdEvent((type) => {
      if (type === AdEventType.LOADED) {
        this.setState({loaded: true});
      }
      if (type === AdEventType.CLOSED) {
        console.log('closed');
        this.setState({loaded: false});
        interstitial.load();
      }
    });
  }
  render() {
    return (
      <Button
        title="Show Interstitial"
        onPress={() => {
          this.state.loaded && interstitial.show();
        }}
      />
    );
  }
}
