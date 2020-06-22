const AUTH_UPDATE = "hackr/auth/auth_update";
const AUTH_LOGIN_FAIL = "hackr/auth/auth_login_fail";
const AUTH_LOGIN_SUCCESS = "hackr/auth/auth_login_success";

const INITIAL_STATE = {
  loading: true,
  errors: {},
  user: {}

};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_UPDATE:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case AUTH_LOGIN_FAIL:
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
