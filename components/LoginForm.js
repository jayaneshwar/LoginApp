import { View,TextInput, Text,StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitBtn from './FormSubmitBtn'

const LoginForm = () => {
    return (
      <FormContainer>
        <FormInput title="Email" placeholder="example@gmail.com" />
            <FormInput title="Password" placeholder="********" />
            <FormSubmitBtn title='Submit'/>
      </FormContainer>
    );
}
const styles = StyleSheet.create({

  text: {
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default LoginForm