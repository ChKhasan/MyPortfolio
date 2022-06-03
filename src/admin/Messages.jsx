import { Content } from "antd/lib/layout/layout";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { getData, postData } from "../server/common";
import { Button } from "antd";
import axios from "axios";
import { API_URL, TOKEN } from "../const/API";

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Messages = () => {
  const [value, setValue] = useState(0);
  const [messageData, setMessageData] = useState([]);

  useEffect(() => {
    getData("auth/messages").then((res) => {
      setMessageData(res.data.data);
    });
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    console.log(checked);
    setChecked(newChecked);
  };
  const postMessage = () => {

    postData("messages", { message: "Salom kursdoshlar va kasbdoshlar " }).then(() => {

      getData("auth/messages").then((res) => {
        console.log(res.data.data);
        setMessageData(res.data.data);
      });

    });


  };
  return (
    <div>
      <div className="content-body">
        <div className="content-title">
          <h3>Messages</h3>
        </div>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Answered" {...a11yProps(0)} />
                <Tab label="Unanswered" {...a11yProps(1)} />
              </Tabs>
            </Box>
       
            <TabPanel value={value} index={0}>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
         {messageData.filter(item => item.answer.length > 0).map((element,index) => {

               return(
               <ListItem key={index} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={element.message}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                         admin
                        </Typography>
                        {`- ${element.answer}`}
                      </React.Fragment>
                    }
                  />
                </ListItem>)
                {/* <Divider variant="inset" component="li" /> */}
            
         })}
               


              </List>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {messageData.map((item) => {
                  const labelId = `checkbox-list-label-${item._id}`;

                  return (
                    <ListItem
                      key={item._id}
                      secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                          <CommentIcon
                            onClick={() => {
                              
                            }}
                          />
                        </IconButton>
                      }
                      disablePadding
                    >
                      <ListItemButton
                        role={undefined}
                        onClick={handleToggle(item)}
                        dense
                      >
                        <ListItemAvatar>
                          <Avatar
                            alt="Travis Howard"
                            src="/static/images/avatar/2.jpg"
                          />
                        </ListItemAvatar>
                        <ListItemText
                          id={labelId}
                          primary={item.message}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </TabPanel>
          </Box>
        </Content>
      </div>
    </div>
  );
};

export default Messages;
