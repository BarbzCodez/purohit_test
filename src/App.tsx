import React from "react";

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import Facials from "./pages/Facials/Facials";
import HolterMonitors from "./pages/HolterMonitors/HolterMonitors";

function App(): JSX.Element {
  return (
    <div className="PurohitPage">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/purohit_test" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/facials" element={<Facials />} />
          <Route path="/holterMonitors" element={<HolterMonitors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
