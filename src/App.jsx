import './App.css'
import Navigation from "./Navigation.jsx";
import Billboard from "./Billboard.jsx";
// 1912 922
function App() {
  return (
      <>
          <div className="nav-container">
              <div className="sevsu-head">
                  <img className="sevsu-logo" src="src/assets/logo.png" alt="SevSU logo"></img>
                  <h2 className="university-name">Библиотека Севастопольского государственного университета</h2>
              </div>
              <Navigation/>
          </div>

          <div className="main-container">
              <Billboard />
          </div>

      </>
  )
}

export default App
