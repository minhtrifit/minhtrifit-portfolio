import { Routes, Route } from "react-router-dom";
import Banner from "../Home/Banner/Banner";
import NewPost from "../Home/New Post/NewPost";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import DetailBlog from "../DetailBlog/DetailBlog";
import StarPost from "../Home/Star Post/StarPost";
import Footer from "../Footer/Footer";
import "./MyRoutes.scss";

const MyRoutes = (props) => {
  const {
    initBlogList,
    listBlogContent,
    handleAddStarPost,
    blogStartList,
    newPostPagCount,
    newPostPag,
    handleChangeNewPostPage,
  } = props;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="content">
            <Banner />
            <NewPost
              listBlogContent={listBlogContent}
              handleAddStarPost={handleAddStarPost}
              blogStartList={blogStartList}
              newPostPagCount={newPostPagCount}
              newPostPag={newPostPag}
              handleChangeNewPostPage={handleChangeNewPostPage}
            />
            <StarPost
              initBlogList={initBlogList}
              handleAddStarPost={handleAddStarPost}
              blogStartList={blogStartList}
            />
            <Footer />
          </div>
        }
      />
      <Route
        path="/blog"
        element={
          <div className="content">
            <Blog
              initBlogList={initBlogList}
              blogStartList={blogStartList}
              handleAddStarPost={handleAddStarPost}
            />
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
      <Route
        path="/blog/:id"
        element={
          <div className="content">
            <DetailBlog initBlogList={initBlogList} />
          </div>
        }
      />
    </Routes>
  );
};

export default MyRoutes;
