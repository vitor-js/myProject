export function checkUserLoggedRequest() {
  return {
    type: "@auth/CHECK_USER_LOGGED_REQUEST",
  };
}

export function checkUserLoggedSuccess(user) {
  return {
    type: "@auth/CHECK_USER_LOGGED_REQUEST_SUCCESS",
    user: user,
  };
}

export function checkUserLoggedFailed() {
  return {
    type: "@auth/CHECK_USER_LOGGED_REQUEST_FAIL",
  };
}
