//# Packages
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";

//# Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AuthActions from "../../store/modules/auth/actions";

//# Components
import { View, StyleSheet } from "react-native";

//# Routes
import AppRouter from "../../routes/app.routes";
import AuthRouter from "../../routes/auth.routes";

const SplashScreen = ({ signed = false, checkUserLoggedRequest, loading }) => {
  const [loadingAnimation, setLoadingAnimation] = useState(true);

  useEffect(() => {
    checkUserLoggedRequest();
    setTimeout(() => {
      setLoadingAnimation(false);
    }, 4500);
  }, []);

  return (
    <>
      {loadingAnimation ? (
        <View style={styles.container}>
          <LottieView
            source={require("../../assets/animation/splashScreen/logo.json")}
            autoPlay
            style={{
              width: 400,
              height: 400,
            }}
          />
        </View>
      ) : (
        <>{signed ? <AppRouter /> : <AuthRouter />}</>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#08171e",
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => ({
  signed: state.auth.signed,
  loading: state.auth.loading,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
