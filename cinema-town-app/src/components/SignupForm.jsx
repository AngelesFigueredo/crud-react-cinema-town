import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import { Button } from "react-bootstrap";

const SignupForm = () => {
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleInputChange = e => {
    const { value, name } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(signupData)
    authService
      .signup(signupData)
      .then(({ data }) => navigate("/login"))
      .catch(err => console.log(err));
  };

  const { username, password, email } = signupData;

  return (
    <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          name="username"
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handleInputChange}
          name="password"
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          name="email"
        />

      <div>
        <Button variant="primary" type="submit">
          Create user
        </Button>
        <Link to="/login">Login</Link>
      </div>
    </form>
  );
};

export default SignupForm;