import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ButtonBannerAd from './src/views/ButtonBannerAd';
import Pub from './src/views/Pub';
import Interstitial from './src/views/Interstitial';
import DesactiveBannerAd from './src/views/DesactiveBannerAd';
import {AsyncStorage} from 'react-native';
import Reward from './src/views/Reward';

class App extends React.Component {
  state = {
    hasUser: true,
  };

  async componentDiMount() {
    const hasUser = JSON.parse(
      (await AsyncStorage.getItem('@hasUser')) || 'false',
    );
    this.setState({hasUser});
  }

  login = () => {
    AsyncStorage.setItem('@hasUser', String(true));
    this.setState({hasUser: true});
  };

  logout = () => {
    AsyncStorage.setItem('@hasUser', String(false));
    this.setState({hasUser: false});
  };

  render() {
    const {hasUser} = this.state;

    if (hasUser === null) {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        {hasUser && <ButtonBannerAd logout={this.logout} />}
        {!hasUser && <Pub />}
        {!hasUser && <DesactiveBannerAd login={this.login} />}
        {<Interstitial />}
        {<Reward />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
});

export default App;
