import {StyleSheet,TextInput, View, Text } from 'react-native'
import React from 'react'

const FormInput = ({placeholder, title}) => {
  return (
    <>
          <Text style={styles.text}>{ title}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.container}
      ></TextInput>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#1b1b33",
    height: 35,
    borderRadius: 8,
    fontSize: 16,
        paddingLeft: 10,
    marginBottom:30,
  },
    text: {
        fontWeight: "bold"
    },
});

export default FormInput