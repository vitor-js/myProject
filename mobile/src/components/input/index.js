import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  createRef,
} from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Input = forwardRef((props, ref) => {
  const [isSecutiry, setIsSecuriry] = useState(props.secureTextEntry);
  const [error, setError] = useState(false);
  const inputRef = createRef();

  useImperativeHandle(ref, () => ({
    focusOnError() {
      setError(true);
      inputRef.current.focus();
    },
    resetError() {
      setError(false);
    },
  }));

  return (
    <>
      <View style={styles.containerLabel}>
        <Text style={{ color: props.colorLabel, fontWeight: "bold" }}>
          {props.label}
        </Text>
      </View>
      <View style={styles.containerInput}>
        <TextInput
          ref={inputRef}
          style={[styles.input, { borderColor: error ? "#e91e63" : "#E4E7EB" }]}
          underlineColorAndroid="transparent"
          placeholderTextColor={"#7B8794"}
          {...props}
          secureTextEntry={isSecutiry}
        />
        <MaterialCommunityIcons
          name={props.iconName}
          size={23}
          color={error ? "#e91e63" : "#444"}
          style={styles.icon}
        />
        {props.secureTextEntry ? (
          <TouchableOpacity
            onPress={() => {
              setIsSecuriry(!isSecutiry);
            }}
          >
            <MaterialCommunityIcons
              name={isSecutiry ? "eye" : "eye-off"}
              size={23}
              color="#7B8794"
              style={styles.iconSecret}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  containerLabel: {
    marginTop: 20,
    marginBottom: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  containerInput: {
    flexDirection: "row",
  },
  input: {
    height: 50,
    flex: 1,
    backgroundColor: "#F8F9FA",
    paddingLeft: 45,
    borderRadius: 5,
    fontSize: 15,
    borderWidth: 1,
  },
  icon: {
    position: "absolute",
    left: 10,
    top: 13.5,
  },
  iconSecret: {
    position: "absolute",
    right: 15,
    top: 13.5,
  },
});

export default Input;
