//# Packages
import React, { useState, createRef, useEffect } from "react";

//# Components
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Input from "../../components/input";
import KeyboardDismiss from "../../components/layout/keyboardDismiss.js";
import Button from "../../components/submit/index";

//# styles
import globalStyle from "../../styles/global.js";

//# helpers
import emailValidade from "../../helpers/validators/emailValidate";
import caractereLimitValdiade from "../../helpers/validators/validatorLimitsCaracteres";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const emailInput = createRef();
  const PassInput = createRef();
  useEffect(() => {
    emailInput.current.resetError();
  }, [email]);

  useEffect(() => {
    PassInput.current.resetError();
  }, [passWord]);

  const handleValidade = () => {
    let error = false;
    if (!emailValidade(email)) {
      emailInput.current.focusOnError();
      return;
    }
    if (caractereLimitValdiade(passWord, 6)) {
      PassInput.current.focusOnError();
      return;
    }
    return !error;
  };

  const handleSubmit = () => {
    if (!handleValidade()) return;
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardDismiss>
        <View style={styles.container}>
          <View style={styles.containerInputs}>
            <View>
              <Text style={styles.textTitulo}>
                Faça seu login e tenha acesso a melhor plataforma de aprendizado
              </Text>
            </View>
            <Input
              ref={emailInput}
              iconName="account"
              placeholder="E-mail"
              autoCapitalize="none"
              autoCorrect={true}
              keyboardType="email-address"
              value={email}
              onChange={setEmail}
              label="Email"
              colorLabel="#fff"
            />
            <Input
              ref={PassInput}
              secureTextEntry
              iconName="lock-outline"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              value={passWord}
              onChange={setPassword}
              label="Password"
              colorLabel="#fff"
            />

            <TouchableOpacity style={styles.containerForgot}>
              <Text style={styles.text}>Esqueceu sua senha ?</Text>
            </TouchableOpacity>

            <View style={styles.containerButton}>
              <Button
                background="#04a5d3"
                onPressButton={() => {
                  handleSubmit();
                }}
                text="Logar"
              />
            </View>
          </View>
          <View style={styles.containerCall}>
            <TouchableOpacity>
              <Text style={styles.text}>Não tem conta? Faça seu cadastro</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardDismiss>
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
  containerInputs: {
    flex: 0.8,
    justifyContent: "center",
  },
  textTitulo: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  containerButton: {
    marginTop: 25,
  },
  containerForgot: {
    alignItems: "flex-end",
    marginTop: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
  containerCall: {
    flex: 0.1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default SignIn;
