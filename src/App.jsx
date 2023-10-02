import { useState } from "react";
import Header from "./Sections/Header";
import Main from "./Sections/Main";
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import MoreDetails from "./Page/More-details";

const App = () => {
  return <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/country/:name" element={<MoreDetails/>}/>
    </Routes>
  </Router>
}

export default App;

