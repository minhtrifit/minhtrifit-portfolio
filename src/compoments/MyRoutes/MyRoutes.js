import { Routes, Route } from "react-router-dom";
import Banner from "../Home/Banner/Banner";
import NewPost from "../Home/New Post/NewPost";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import "./MyRoutes.scss";

const MyRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="content">
            <Banner />
            <NewPost />
          </div>
        }
      />
      <Route
        path="/blog"
        element={
          <div className="content">
            <Blog />
          </div>
        }
      />
      <Route
        path="/contact"
        element={
          <div className="content">
            <Contact />
          </div>
        }
      />
    </Routes>
  );
};

export default MyRoutes;
