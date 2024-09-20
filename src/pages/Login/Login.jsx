import "./Login.css";
import assets from "../../assets/assets";
import { useState } from "react";
import { signup, login } from "../../config/firebase";
import { toast } from "react-toastify";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = () => {
    if (isSignUp) {
      signup(username, email, password);
      toast.success("User Added Sucessfull");
    } else {
      login(username, password);
      toast.success("User Logged in Sucessfull");
    }
  };

  return (
    <div className="login">
      <img alt="logo" className="logo" src={assets.logo_big} />

      <form onSubmit={(e) => e.preventDefault()} className="login-form">
        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
        {isSignUp && (
          <input
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="form-input"
            type="text"
            placeholder="Enter Username"
            required
          />
        )}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          type="email"
          placeholder="Enter Email"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
          type="password"
          placeholder="Enter Password"
          required
        />
        <button onClick={onSubmitHandler} type="submit">
          {isSignUp ? "Sign Up" : "Login"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the term of use & privacy policy</p>
        </div>
        <div className="login-forgot">
          <p className="login-toggel">
            {isSignUp ? "Already have an account" : "Create an Account "}
            <span onClick={() => setIsSignUp(!isSignUp)}> click here</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
