import React from "react";
import "./Login.css";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { useData } from "./PostProvider";
const Login = () => {
  const { dispatch, email, pass } = useData();
  const userData = [
    {
      id: 1,
      username: "Mohan",
      userEmail: "mohan@example.com",
      userPassword: "mohan12345",
    },
    {
      id: 2,
      username: "Jack",
      userEmail: "jack@example.com",
      userPassword: "jack12345",
    },
  ];
  const lognav = useNavigate();
  // const [email, setEmail] = useState("mohan@example.com");
  //const [pass, setPass] = useState("mohan12345");
  const handleLogin = (event) => {
    event.preventDefault();

    const findUser = userData.find((list) => email === list.userEmail);
    if (findUser) {
      if (pass === findUser.userPassword) {
        dispatch({ type: "user", payload: findUser.username });
        return lognav("/app/cities");
      }
    }
  };
  return (
    <div className="login">
      <NavBar />

      <form className="form" onSubmit={handleLogin}>
        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => dispatch({ type: "pass", payload: e.target.value })}
        />
        <button className="btn log-btn" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
