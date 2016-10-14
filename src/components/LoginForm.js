import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import {
  Button,
  Card,
  CardSection,
  Input,
  Spinner
} from './common';
import {
  emailChanged,
  passwordChanged,
  loginUser
} from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    console.log('onButtonPress() called');
    console.log(this.props);
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            autoCapitalize="none"
            label="Email"
            placeholder="name@email.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <Text style={styles.errorText}>
          {this.props.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorText: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
