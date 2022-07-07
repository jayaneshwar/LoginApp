import {StyleSheet ,View, Text ,TouchableWithoutFeedback} from 'react-native'
import React from 'react'

const FormSelector = ({title,backgroundColor}) => {
  return (
    <TouchableWithoutFeedback>
      <View
        style={[styles.container,{backgroundColor} ]}
      >
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 45,
    width: "50%",
    backgroundColor: "#1b1b33",
    justifyContent: "center",
    alignItems: "center",
  },
    text: {
        color: "white",
        fontSize: 18
    },

});


export default FormSelector