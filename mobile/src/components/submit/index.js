import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

const Button = ({
  onPressButton = () => {},
  background,
  text,
  isDisabled = false,
}) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: `${background ? background : "#7FA786"}`,
      width: "100%",
      height: 55,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      opacity: !isDisabled ? 1 : 0.5,
    },
    text: {
      fontSize: 18,
      color: "white",
      fontWeight: "500",
    },
  });

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onPressButton()}
      disabled={isDisabled}
    >
      <Text style={styles.text}>{text ? text : "Tá sem texto, poh"}</Text>
    </TouchableOpacity>
  );
};

export default Button;
