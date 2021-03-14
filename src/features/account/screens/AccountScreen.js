import React from 'react';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  Title,
} from '../components/AccountStyles';
import { Spacer } from '../../../components/Spacer';

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon='email'
          mode='contained'
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <Spacer size='large'>
          <AuthButton
            icon='lock-open-outline'
            mode='contained'
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
