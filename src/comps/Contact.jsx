import React, { useEffect, useRef, useState } from "react";
import CompHeader from "./CompHeader";
import AnyReactComponent from "./AnyReactComponent";
import emailjs from "@emailjs/browser";
import { Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { getData, postData } from "../server/common";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Modal } from "antd";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { Map, YMaps } from "react-yandex-maps";

const Contact = () => {
  const form = useRef();
  const [messageData, setMessageData] = useState([]);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const refMessage = useRef(null);
  const auth = useAuth();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6c1gtbv",
        "template_nhg8zfc",
        form.current,
        "KXRXxhdmhUS9nV40H"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  };
  const getAPIMessage = () => {
    getData("auth/messages").then((res) => {
      setMessageData(res.data.data);
      console.log(res);
    });
  };
  useEffect(() => {
    getAPIMessage();
  }, []);

  const sendMessage = () => {
    if (auth)
      return postData("messages", { message: refMessage.current.value }).then(
        () => {
          getAPIMessage();
          refMessage.current.value = "";
        }
      );

    return setVisible(true);
  };
  return (
    <div className="container-fluid p-60">
      <div className="container mt-5 " id="contact">
        <CompHeader
          text="If you wanna get in touch, talk to me about a project collaboration or just say hi,
          fill up the awesome form below or send an email to 
          chulliyevhasan1499@mail.ru
           and let's talk."
          title="Contact"
        />

        <div className="row contact mt-4">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address d-flex flex-row">
                <div className="svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </div>
                <div className="info_1">
                  <h4>Location:</h4>
                  <p>Yunusabod, Tashkent, Uzb</p>
                </div>
              </div>
              <div className="address d-flex">
                <div className="svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                </div>
                <div className="info_1">
                  <h4>Email:</h4>
                  <p>chulliyevhasan1499@mail.com</p>
                </div>
              </div>
              <div className="address d-flex">
                <div className="svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-phone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </div>
                <div className="info_1">
                  <h4>Phone:</h4>
                  <p>+998 99 730 14 99</p>
                </div>
              </div>
              <div className="map">
                <AnyReactComponent />
                {/* <YMaps>
                  <Map
                    defaultState={{
                      center: [55.751574, 37.573856],
                      zoom: 9,
                    }}
                  />
                </YMaps> */}
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              ref={form}
              action="mailto:chulliyevhasan1499@mail.ru"
              onSubmit={sendEmail}
              method="post"
              role="form"
              encType="text/plain"
              className="php-email-form"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <Modal
                title="You are not registered"
                className="to_login_modal"
                centered
                open={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={250}
                footer={<></>}
              >
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <Link className="to_regis" to="/login">
                    Login
                  </Link>
                  <Link className="to_regis" to="/reginter">
                    Registraton
                  </Link>
                </div>
              </Modal>
              {/* <div className="form-group">
                <label for="name">Write Message</label>
                <div className="d-flex">
                  <input
                    type="text"
                    ref={refMessage}
                    className="form-control"
                    name="subject"
                    id="subject"
                    required
                  />
                  <Button
                    onClick={() => sendMessage()}
                    className="send_btn"
                    variant="contained"
                    endIcon={<SendIcon />}
                  >
                    Send
                  </Button>
                </div>
              </div> */}
              {/* <div className="messages_tab">
                {messageData.map((item,index) => {
                 return <h1 key={index}>{item.message}</h1>
               })}
                <Box sx={{ pb: 7 }} ref={ref}>
                  <CssBaseline />
                  <List>
                    {messageData.map((item, index) => (
                      <ListItem button key={index}>
                        <ListItemAvatar>
                          <Avatar alt="Profile Picture" src={index} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={item.message}
                          secondary={item.answer}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </div> */}
              <div className="form-group">
                <label htmlFor="name">Messages</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="10"
                  id="message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
