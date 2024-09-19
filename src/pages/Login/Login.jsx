import "./Login.css";
import assets from "../../assets/assets";
import { useState } from "react";

const Login = () => {
  const [signUp, setSignUp] = useState(true);

  return (
    <div className="login">
      <img alt="logo" className="logo" src={assets.logo_big} />

      <form className="login-form">
        <h2>{signUp ? "Sign Up" : "Login"}</h2>
        {signUp && (
          <input
            className="form-input"
            type="text"
            placeholder="Enter Username"
            required
          />
        )}
        <input
          className="form-input"
          type="email"
          placeholder="Enter Email"
          required
        />
        <input
          className="form-input"
          type="password"
          placeholder="Enter Password"
          required
        />
        <button type="submit">{signUp ? "Sign Up" : "Login"}</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the term of use & privacy policy</p>
        </div>
        <div className="login-forgot">
          <p className="login-toggel">
            {signUp ? "Already have an account" : "Create an Account "}
            <span onClick={() => setSignUp(!signUp)}> click here</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
