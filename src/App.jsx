import './App.css'
import Navigation from "./Navigation.jsx";
import {Routes, Route} from "react-router-dom";
import Authentication from "./Authentication.jsx";
import Home from "./Home.jsx";
// 1912 922
function App() {
  return (
      <>
          <div className="nav-container">
              <div className="sevsu-head">
                  <img className="sevsu-logo" src="src/assets/logo2.png" alt="SevSU logo"></img>
                  <h2 className="university-name">Библиотека Севастопольского государственного университета</h2>
              </div>
              <Navigation/>
          </div>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/authentication" element={<Authentication />} />
          </Routes>
      </>
  )
}

export default App
