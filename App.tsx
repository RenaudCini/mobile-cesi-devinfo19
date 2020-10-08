import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Active from './src/views/Active';
import Pub from './src/views/Pub';
import Desactive from './src/views/Desactive';
import {AsyncStorage} from 'react-native';

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
    console.log();
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
        {hasUser && <Active logout={this.logout} />}
        {!hasUser && <Pub/>}
        {!hasUser && <Desactive login={this.login} />}
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
