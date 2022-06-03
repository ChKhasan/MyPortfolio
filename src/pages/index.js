import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router";
import LayoutP from "../admin/LayoutP";
import Messages from "../admin/Messages";
import PermissionAuth from "../admin/PermissionAuth";
import PersonalSettings from "../admin/PersonalSettings";
import RegistrationP from "../admin/RegistrationP";
import FullPages from "./FullPages";
import LogIn from "./LogIn";
import ProtectedAuth from "../admin/ProtectedAuth";

const index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FullPages />} />
        <Route path="/" element={<ProtectedAuth />}>
          
          <Route path="login" element={<LogIn />} />
          <Route path="registr" element={<RegistrationP />} />
        </Route>
        <Route path="/" element={<PermissionAuth/>}>
          <Route
            path="/"
            element={
              <LayoutP>
                <Outlet />
              </LayoutP>
            }
          >
             <Route path="/" element={<Navigate replace to="messages" />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/personal" element={<PersonalSettings />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default index;
