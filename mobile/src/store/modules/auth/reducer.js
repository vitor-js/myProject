const INITIAL_STATE = {
  user: {},
  token: "",
  signed: false,
  loading: true,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@auth/CHECK_USER_LOGGED_SUCCESS": {
      return {
        ...state,
        token: action.user.token,
        user: action.user,
        signed: true,
        loading: false,
      };
    }
    case "@auth/CHECK_USER_LOGGED_REQUEST_FAIL": {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
}
