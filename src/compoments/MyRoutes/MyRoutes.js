import { Routes, Route } from "react-router-dom";
import Banner from "../Home/Banner/Banner";
import NewPost from "../Home/New Post/NewPost";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";

const MyRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Banner />
            <NewPost />
          </>
        }
      />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default MyRoutes;
