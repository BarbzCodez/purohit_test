import React from "react";

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from "./components/Header";

import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";

function App(): JSX.Element {
  return (
    <div className="PurohitPage">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/purohit_test" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
