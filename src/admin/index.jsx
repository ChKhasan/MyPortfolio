import React from 'react'
import { Outlet, Route, Routes } from 'react-router'
import LayoutP from './LayoutP'
import Messages from './Messages'
import PersonalSettings from './PersonalSettings'

const index = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LayoutP ><Outlet/></LayoutP>} >
                <Route path="/messages" element={<Messages />} />
                <Route path="/personal" element={<PersonalSettings />} />
            </Route>
        </Routes>
    </div>
  )
}

export default index