import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import NewPostPage from "./pages/NewPostPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";

const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/articles" element={<ArticlesListPage />} />
    <Route path="/articles/:name" element={<ArticlePage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/newpost" element={<NewPostPage />} />
  </Routes>
);

export default AllRoutes;
