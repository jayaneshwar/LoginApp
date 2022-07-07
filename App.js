
import { StyleSheet, Dimensions,Text, View, TouchableWithoutFeedback, ScrollView } from "react-native";
import FormHeader from './app/components/FormHeader'
import FormSelector from "./app/components/FormSelector"
import LoginForm from "./app/components/LoginForm"
import SignUpForm from "./app/components/SignUpForm"

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 140 }}>
      <View style={{ height: 100 }}>
        <FormHeader
          leftHeading="Welcome"
          rightHeading="Back"
          subHeading="My Login App"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <FormSelector
          style={styles.borderLeft}
          backgroundColor="rgba(27,27,51,1)"
          title="Login"
        />
        <FormSelector
          style={styles.borderRight}
          backgroundColor="rgba(27,27,51,0.4)"
          title="Sign-Up"
        />
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <LoginForm />
        <ScrollView>
          <SignUpForm />
        </ScrollView>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  }
});