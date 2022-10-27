// src/App.js

import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";
import About from "./components/About";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<AllPosts />} />
          <Route path='/:slug' element={<OnePost />} />
          <Route path='About' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
