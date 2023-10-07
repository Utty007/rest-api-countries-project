// import { useState } from "react";
// import Style from './App.module.css'
import Header from "./Sections/Header";
import Main from "./Sections/Main";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoreDetails from "./Page/More-details";
import { useSelector } from 'react-redux'

const App = () => {
  const isLightModeActive = useSelector(state => state.ui.lightModeActive)

  if (isLightModeActive) {
    document.body.className = 'lightMode'
  } else {
    document.body.className = ''
  }
  // style={{width: '100%', height: '100%'}} className={isLightModeActive? Style.lightMode : Style.darkMode}
  return<Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/country/:name" element={<MoreDetails />} />
      <Route path="/country/:borderCountry" element={<MoreDetails />} />
      <Route path="*" element={<p style={{textAlign: 'center', fontSize: '24px'}}>Error: Page Not Found.</p>} />
    </Routes>
  </Router> 
}

export default App;


