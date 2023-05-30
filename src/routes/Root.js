import React, { useState, useEffect } from 'react';


export default function Root(){
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = () => {
    // Handle login functionality
    console.log('Login');
  };

  const handleSignup = () => {
    // Handle signup functionality
    console.log('Signup');
  };

  const handleRegisterNow = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  useEffect(() => {
    if (showSignup) {
      scrollToSignup();
    }
  }, [showSignup]);

  const scrollToSignup = () => {
    // Find the signup section's element or ID
    const signupSection = document.getElementById('signup-section');

    // Scroll to the signup section
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="registration-page">
      <h1>Welcome to SuperSonic</h1>
      {showLogin && (
        <div className="registration-form">
          <h2>Login</h2>
          <form>
            {/* Email field */}
            <div className="form-field">
              <input type="email" placeholder="Email" required />
              <i className="fas fa-envelope"></i>
            </div>

            {/* Password field */}
            <div className="form-field">
              <input type="password" placeholder="Password" required />
              <i className="fas fa-lock"></i>
            </div>

            {/* Remember me checkbox */}
            <div className="form-field">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <div className="button-log">
              <button onClick={handleLogin}>Log In</button>
            </div>

            {/* Lost password link */}
            <p className="lost-password">Lost your password?</p>

            {/* Register now link */}
            {!showSignup && (
              <a className="register-now" onClick={handleRegisterNow}>
                New to SuperSonic? Register now
              </a>
            )}
          </form>
        </div>
      )}

      {/* Signup section */}
      {showSignup && (
        <div id="signup-section" className="registration-form signup-section">
          <h2>Sign up</h2>
          <form>
            {/* Signup form inputs */}
            <div className="form-field">
              <input type="text" placeholder="Name" required />
              <i className="fas fa-user"></i>
            </div>

            <div className="form-field">
              <input type="email" placeholder="Email" required />
              <i className="fas fa-envelope"></i>
            </div>

            <div className="form-field">
              <input type="password" placeholder="Password" required />
              <i className="fas fa-lock"></i>
            </div>

            <button onClick={handleSignup}>Sign up</button>
          </form>
        </div>
      )}
    </div>
  );
};

// export default Registration;
