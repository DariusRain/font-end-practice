const AUTH_LOGIN_UPDATE = "hackr/auth/auth_login_update";
const AUTH_LOGIN_FAIL = "hackr/auth/auth_login_fail";
const AUTH_LOGIN_SUCCESS = "hackr/auth/auth_login_success";

export const authReducer = (state = 0, action) => {
  switch (action.type) {
    case AUTH_LOGIN_FAIL:
      return;
    case AUTH_LOGIN_SUCCESS:
      return;
    case AUTH_LOGIN_SUCCESS:
      return;
    default:
      return state;
  }
};




