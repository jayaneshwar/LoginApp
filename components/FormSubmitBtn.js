import { View, Text, TouchableOpacity ,StyleSheet} from 'react-native'
import React from 'react'

const FormSubmitBtn = ({title}) => {
  return (

      <TouchableOpacity style={styles.container}>
          <Text style={{ fontSize: 18, color: '#fff' }}>{title }</Text>
      </TouchableOpacity>
    
  )
}
const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: "#999999",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FormSubmitBtn