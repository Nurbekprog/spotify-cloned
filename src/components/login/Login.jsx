import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
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
            <Form className="form" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="user"
                label="Name"
                required
                name="name"
                value={user.name}
                className={`input ${name ? "active" : ""}`}
                onChange={hendelChange}
              />
              <Input
                type="password"
                label="Password"
                required
                name="password"
                value={user.password}
                onChange={hendelChange}
                className={`input ${password ? "active" : ""}`}
              />
              <Button type="primary" onClick={hendelSubmit}>
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPanel;
