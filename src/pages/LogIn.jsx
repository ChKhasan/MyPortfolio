import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import "../index.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { postData } from "../server/common";
import { TOKEN } from "../const/API";
const LogIn = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    // console.log(values);
    postData("auth/login",values).then((res) => {
         localStorage.setItem(TOKEN,res.data.token)
        window.location.href = '/messages'
        navigate("/messages")
    })
  };

  return (
      <div className="container-fluid backgroud_fluid">
    <div className="container">


      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-12">
          <div className="row login_block">
            <div className="col-lg-6 d-none d-lg-flex login_images loginLeft">
              {/* <div className="login_images"> */}
                <h1>Welcome to</h1>
                <div className="header_title">

                <header>My Portfolio</header>
                <header>My Portfolio</header>
                </div>
              {/* </div> */}
            </div>
            <div className="col-lg-6 d-flex  loginRight d-flex justify-content-center align-items-center">
              <div className="col-6 ">
<div className="title_login">
  <span>Log In</span>
</div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                className="text_input"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                className="text_input"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
           

            <Form.Item className="d-flex  justify-content-around">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button form_btn_full"
              >
                Login
              </Button>
            <Link className="regis_link"to="/registr">Registration</Link>
            </Form.Item>
          </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LogIn;
