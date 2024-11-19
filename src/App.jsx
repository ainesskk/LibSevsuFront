import './App.css'
import {Routes, Route} from 'react-router-dom';
import Authentication from "./Authentication/Authentication.jsx";
import Home from "./Home.jsx";
import Header from "./Header.jsx";
import Search from "./BookSearch/Search.jsx";
import UserPage from "./PersonalPage/UserPage.jsx";
import NewsDetail from "./News/NewsDetail.jsx";
import NewsList from "./News/NewsList.jsx";
import AddNews from "./Admin/AddNews.jsx";
import AddBooks from "./Admin/AddBooks.jsx";
import {AuthProvider} from "./contexts/AppContext/AuthContext.jsx";
// 1912 922
function App() {

  return (
      <>
          <AuthProvider>
                  <Header />
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="search" element={<Search />} />
                      <Route path="authentication" element={<Authentication />} />
                      <Route path="/userpage" element={<UserPage />} />
                      <Route path="/newsdetail" element={<NewsDetail />} />
                      <Route path="/allnews" element={<NewsList />} />
                      <Route path="/addnews" element={<AddNews />} />
                      <Route path="/addbooks" element={<AddBooks />} />
                  </Routes>
          </AuthProvider>
      </>
  )
}

export default App
