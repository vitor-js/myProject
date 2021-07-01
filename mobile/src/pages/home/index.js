//# Packages
import React from "react";

//# Components
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

//# styles
import globalStyle from "../../styles/global.js";

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>a</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: globalStyle.background,
    paddingHorizontal: 25,
  },
});

export default SignIn;
