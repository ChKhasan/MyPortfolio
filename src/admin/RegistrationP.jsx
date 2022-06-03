import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { Form, Input, Button, InputNumber } from "antd";
import axios from "axios";
import { API_URL, TOKEN } from "../const/API";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const RegistrationP = () => {
  const onFinish = (values) => {
    console.log(values);
    axios
      .post("https://portfolio-bakcend.herokuapp.com/api/v1/auth/register", values)
      .then((res) => {
        localStorage.setItem(TOKEN,res.data.token)
        window.location.href = '/'

      });
  };

  return (
    // <div className="container">
    //   <div
    //     className="row d-flex justify-content-center align-items-center"
    //     style={{ height: "100vh" }}
    //   >
    //     <div className="col-6">
    //       <Form
    //         {...layout}
    //         layout="vertical"
    //         name="nest-messages"
    //         onFinish={onFinish}
    //         validateMessages={validateMessages}
    //       >
    //         <Form.Item
    //           label="First Name"
    //           name="first_name"
    //           rules={[
    //             {
    //               required: true,
    //             },
    //           ]}
    //         >
    //           <Input />
    //         </Form.Item>
    //         <Form.Item
    //           label="Last Name"
    //           name="last_name"
    //           rules={[
    //             {
    //               required: true,
    //             },
    //           ]}
    //         >
    //           <Input />
    //         </Form.Item>
    //         <Form.Item
    //           label="User Name"
    //           name="username"
    //           rules={[
    //             {
    //               required: true,
    //             },
    //           ]}
    //         >
    //           <Input />
    //         </Form.Item>
    //         <Form.Item
    //           label="Password"
    //           name="password"
    //           rules={[
    //             {
    //               required: true,
    //               message: "Please input your password!",
    //             },
    //           ]}
    //         >
    //           <Input />
    //         </Form.Item>
    //         <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
    //           <Button type="primary" htmlType="submit">
    //             Send
    //           </Button>
    //         </Form.Item>
    //       </Form>
    //     </div>
    //   </div>
    // </div>
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
            <div className="col-lg-6 d-flex loginRight d-flex justify-content-center align-items-center">
              <div className="col-8 ">
<div className="title_login">
  <span>Registration</span>
</div>
<Form
            {...layout}
            layout="vertical"
            name="nest-messages"
            onFinish={onFinish}
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 24,
            }}
            validateMessages={validateMessages}
          >
            <Form.Item
            

              name="first_name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input className="text_input" placeholder="First Name"/>
            </Form.Item>
            <Form.Item
            
              name="last_name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input className="text_input" placeholder="Last Name"/>
            </Form.Item>
            <Form.Item
            
             className="d-flex justify-content-center"
              name="username"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input className="text_input" placeholder="User name"/>
            </Form.Item>
            <Form.Item
              name="password"
            

              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input className="text_input" placeholder="Password"/>
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
              <Button type="primary" htmlType="submit" className="form_btn_full">
              CREATE ACCOUNT
              </Button>
          
            </Form.Item>
          </Form>
          {/* <Form
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
                CREATE ACCOUNT
              </Button>
            <Link className="regis_link"to="/registr">Registration</Link>
            </Form.Item>
          </Form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RegistrationP;
