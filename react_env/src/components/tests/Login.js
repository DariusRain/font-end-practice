// LoginComponent for hackr.
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import {apiRoot} from "../../config"
// import axios from "axios";
export const Login = () => {
    // const handleClick = () => (<Redirect to={`${apiRoot}/auth/github`} />)
    return (
        <div>
            <h1>Login</h1>
            <Link to="/hackr/auth/github">
                Sign in
            </Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
