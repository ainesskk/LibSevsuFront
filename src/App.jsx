import './App.css'
import {Routes, Route} from 'react-router-dom';
import Authentication from "./Authentication/Authentication.jsx";
import Home from "./Home.jsx";
import Header from "./Header.jsx";
import Search from "./BookSearch/Search.jsx";
// 1912 922
function App() {

  return (
      <>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="search" element={<Search />} />
              <Route path="authentication" element={<Authentication />} />
          </Routes>
      </>
  )
}

export default App
