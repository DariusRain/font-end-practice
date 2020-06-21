// LoginComponent for hackr.
import React from "react";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <div
      className={"flex-column"}
    >
      <img
      className={"center-element"}
        style={{ width: "7rem"}}
        alt="Github-Icon"
        src="https://cdn.iconscout.com/icon/free/png-256/github-1693585-1442626.png"
      ></img>
      <Link
        style={{
          width: "7rem",
          textDecoration: "none",
          fontSize: "1rem",
          textAlign: "center"
        }}
        to="/hackr/auth/github"
      >
        Sign in
      </Link>
    </div>
  );
};

export default Login;
