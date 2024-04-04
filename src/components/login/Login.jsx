import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const LoginPanel = ({ login }) => {
  const [name, setName] = useState(false);
  const [password, setpassword] = useState(false);
  const navigation = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const hendelSubmit = () => {
    if (user.name && user.password !== "") {
      localStorage.setItem("user", JSON.stringify(user));
      navigation("/");
      login(true);
    } else {
      if (user.name === "") {
        setName(true);
      }
      if (user.password === "") {
        setpassword(true);
      }
    }
  };
  const hendelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value.trim() });
    setpassword(false);
    setName(false);
  };
  return (
    <>
      <div className="login_p">
        <div className="container">
          <div className="login">
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="user"
                label="Name"
                required
                variant="outlined"
                name="name"
                value={user.name}
                className={`input ${name ? "active" : ""}`}
                onChange={hendelChange}
              />
              <input
                type="password"
                label="Password"
                required
                variant="outlined"
                name="password"
                value={user.password}
                onChange={hendelChange}
                className={`input ${password ? "active" : ""}`}
              />
              <button variant="contained" size="large" onClick={hendelSubmit}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPanel;
