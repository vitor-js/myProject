//# Package
import { Alert } from "react-native";
import { call, put, select, all, takeLatest, take } from "redux-saga/effects";
// import jwt_decode from "jwt-decode";
import { checkUserLoggedSuccess, checkUserLoggedFailed } from "./actions";

//# Services
//import api from "../../../services/api";

//# helpers
import { setUserStorage, getUserStorage } from "../../../helpers/storage/index";

function* checkUser() {
  const user = yield getUserStorage();
  if (user) {
    yield put(checkUserLoggedSuccess(user));
  } else {
    yield put(checkUserLoggedFailed());
  }
}

export default all([takeLatest("@auth/CHECK_USER_LOGGED_REQUEST", checkUser)]);
