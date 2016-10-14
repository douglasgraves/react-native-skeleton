import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Hello from './components/Hello';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="auth">
        <Scene
          key="login"
          component={LoginForm}
          title="Login"
          style={styles.page}
        />
      </Scene>
      <Scene key="main">
        <Scene
          key="hello"
          component={Hello}
          title="Hello"
          style={styles.page}
        />
      </Scene>
    </Router>
  );
};

const styles = {
  page: {
    paddingTop: 65
  }
};

export default RouterComponent;
