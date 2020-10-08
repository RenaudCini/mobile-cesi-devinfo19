import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Home from './src/views/Home';
import Login from './src/views/Login';
import {AsyncStorage} from 'react-native';

class App extends React.Component {
  state = {
    hasUser: false,
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
        {hasUser && <Home logout={this.logout} />}
        {!hasUser && <Login login={this.login} />}
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
