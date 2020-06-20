// LoginComponent for hackr.
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {apiRoot} from "../../config"
import axios from "axios";
export const Login = () => {
    const handleClick = async () => await axios.get(`${apiRoot}/auth/github`);
    return (
        <div>
            <h1>Login</h1>
            {/* <Link to="/auth/github">
                Sign in
            </Link> */}
            <button onClick={handleClick}>
                Sign in
            </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
