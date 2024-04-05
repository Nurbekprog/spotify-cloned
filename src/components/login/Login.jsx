import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
const LoginPanel = ({ login }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
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
                size="large"
                type="user"
                placeholder="name"
                required
                name="name"
                value={user.name}
                className={`input ${name ? "active" : ""}`}
                onChange={hendelChange}
              />
              <Input.Password
                size="large"
                type="password"
                label="Password"
                required
                name="password"
                value={user.password}
                onChange={hendelChange}
                placeholder="password"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              <Button size="large" type="primary" onClick={hendelSubmit}>
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
