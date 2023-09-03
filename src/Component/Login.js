// Importing image assets
import logoLinkedin from "../Images/login-logo.svg";
import heroImage from "../Images/login-hero.svg";
import googleIcon from "../Images/google.svg";
import {connect} from "react-redux";
import React from 'react';
import {SigninAPI} from "../Action/index.js";
import { Redirect } from "react-router-dom";
import App from "../App.js"
import Home from '../Component/Home.js';
  const Login = (props) => {
  //{props.user  && <Redirect to="/home" />;}
  {if ( props.user) {
    return <Redirect to="/home" />;
  }}
  return (

    <div>
      
      {/* Top Header */}
      <div className="flex justify-between p-3 md:p-4 md:px-10">
        <img src={logoLinkedin} alt="LinkedIn Logo" className="w-28 pt-1 md:w-40" />

        <div>
         
          <button
            className="border-2 rounded-3xl w-20 h-10 font-bold text-gray-400 md:text-2xl md:w-36 md:h-14"
            style={{ color: "#406F9E", border: "2px solid #406F9E" }} >
            Sign in
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="grid md:grid-cols-2">
        <p className="text-center pt-12 px-5 p-3 md:text-4xl md:text-left md:ml-4 md:mt-14" style={{ color: "#406F9E" }}>
          Welcome to your professional Community
        </p>
        <img className="md:mt-7" src={heroImage} alt="Hero" />
      </div>

      {/* Sign in with Google button */}
      <button className="flex text-center mt-10 border border-gray-600 justify-center h-12 bg-white items-center rounded-3xl mx-1 ml-5 w-80 md:w-96 relative md:bottom-80"
       onClick={props.Signin}
      >
        <img src={googleIcon} alt="Google Icon" />

        <span className="ml-2">Sign in with Google</span>
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user : state.UserReducer.user,
})

const mapDispatchToProps = (dispatch) => ({
  Signin: () => dispatch(SigninAPI()),
})

export default connect(mapStateToProps , mapDispatchToProps)(Login);

//export default Login;