import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

import signup_bg from '../../assets/sigunp/signup-bg.png';
import signup_logo from '../../assets/sigunp/signup-page-logo.png';

const Signup = () => {

  const navigate = useNavigate();

  return (
    <div className="signup container-fluid">

      <div className="row">

        <div className="col-6 left-col">

          <div className="signup-bg">
            <img src={signup_bg} alt="" />
          </div>

          <div className="sigun-content">
            <h1>INTERVIEW SUITE</h1>
            <div className="signup-logo">
              <img src={signup_logo} alt="" />
            </div>
            <h3>
              Are you ready to Ace your interview <br /> 
              <span className="signup-sub-para">with us</span>
            </h3>

          </div>

        </div>


        <div className="col-6 right-col">

          <div className="right-content">

            <h3>Create Account</h3>

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
                type="submit" 
                className="btn reg-btn"
                onClick={() => {navigate('/login')}}>
                GET STARTED
              </button>

            </form>

            <div className="optional-signup">
                <hr />

                <div className="optional-signup-btn">

                    <button className="google-signup">
                        <i className="bi bi-google"></i> 
                        <span className='optional-signup-font'>Sign up with Google</span>
                    </button>

                    <button className="linkedin-signup">
                        <i className="bi bi-linkedin"></i> 
                        <span className='optional-signup-font'>Sign up with LinkedIn</span>
                    </button>

                </div>
            </div>

            <div className="already-have-acc">
              <p>Already have an account? <a href="#" onClick={(e) => {e.preventDefault(); navigate('/login')}} >LOGIN</a> </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Signup;
