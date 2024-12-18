import React from 'react';
import './Login.css'

import signup_bg from '../../assets/sigunp/signup-bg.png';
import signup_logo from '../../assets/sigunp/signup-page-logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

  return (
    <div className="signup container-fluid">

      <div className="row">

        {/* Right Column (now first) */}
        <div className="col-6 right-col">

          <div className="right-content login-right-content">

            <h3>Sign In</h3>

            <form>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control mt-2"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control mt-2"
                  id="password"
                  placeholder="Min 8 characters"
                />
              </div>

              <button 
                type="submit" className="btn reg-btn"
                onClick={() => {navigate('/home')}}>
                SIGN IN
              </button>
            </form>

            <div className="optional-signup">
              <hr />
              <div className="optional-signup-btn">
                <button className="google-signup">
                  <i className="bi bi-google"></i>
                  <span className="optional-signup-font">Sign up with Google</span>
                </button>

                <button className="linkedin-signup">
                  <i className="bi bi-linkedin"></i>
                  <span className="optional-signup-font">Sign up with LinkedIn</span>
                </button>
              </div>
            </div>

            <div className="already-have-acc">
              <p>Don't have an account? <a href='#' onClick={(e) => {e.preventDefault(); navigate('/signup')}}>SIGN UP</a></p>
            </div>

          </div>
        </div>

        {/* Left Column (now second) */}
        <div className="col-6 left-col">

          <div className="login-bg">
            <img src={signup_bg} alt="" />
          </div>

          <div className="login-content">
            <h1>INTERVIEW SUITE</h1>
            <div className="login-logo">
              <img src={signup_logo} alt="" />
            </div>
            <h3>
                Your AI companion for mastering <br />
              <span className="login-sub-para">interviews with confidence</span>
            </h3>
          </div>

        </div>
        
      </div>

    </div>
  );
};

export default Login;
