import { View, Text,StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitBtn from './FormSubmitBtn';

const SignUpForm = () => {
  return (
    <FormContainer>
      <FormInput title="Full Name" placeholder="Jainesh Jai" />
      <FormInput title="Email" placeholder="example@gmail.com" />
      <FormInput title="Date Of Birth" placeholder="29-11-1998" />
      <FormInput title="Create Password" placeholder="********" />
      <FormInput title="Conform Password" placeholder="********" />

      <FormSubmitBtn title="Sign-Up" />
    </FormContainer>
  );
}
const styles = StyleSheet.create({

  text: {
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default SignUpForm