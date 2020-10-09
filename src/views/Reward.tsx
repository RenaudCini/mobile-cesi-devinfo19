import React from 'react';
import Button from '../components/button';
import {
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from '@react-native-firebase/admob';

const rewarded = RewardedAd.createForAdRequest(TestIds.REWARDED, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});
export default class Reward extends React.Component {
  state = {
    loaded: false,
  };

  componentDidMount(): void {
    rewarded.load();
    rewarded.onAdEvent((type) => {
      if (type === RewardedAdEventType.LOADED) {
        this.setState({loaded: true});
      } else if (type === RewardedAdEventType.EARNED_REWARD) {
        console.log('User earned reward of ', rewarded);
      } else if (type === 'closed') {
        this.setState({loaded: false});
        rewarded.load();
      }
    });
  }

  render() {
    return (
      <Button
        title="Show Rewarded Ad"
        onPress={() => {
          rewarded.show();
        }}
      />
    );
  }
}
