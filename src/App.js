import { useEffect, useState } from "react";
import axios from "axios";
// import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./compoments/Nav/Nav";
import MyRoutes from "./compoments/MyRoutes/MyRoutes";

function App() {
  // URL blog management
  const blogManagementLink = "./blog content/blogManagement.json";

  // Blog type state
  const [initBlogList, setInitBlogList] = useState([]); // set 1 times when loading page
  const [listBlogContent, setListBlogContent] = useState([]);
  const [blogStartList, setBlogStartList] = useState([]);

  // Pagination state
  const [newPostPagCount, setNewPostPagCount] = useState(0);
  const [newPostPag, setNewPostPag] = useState(1);

  // Other state
  const [navOpen, setNavOpen] = useState(false);

  //========================================================================================

  const handleOpenNav = () => {
    setNavOpen(!navOpen);
  };

  // Call API && set new post list
  useEffect(() => {
    const getBlogManagement = async () => {
      try {
        const tempListContent = [];
        const tempListContent1 = [];
        const res = await axios.get(blogManagementLink);
        const data = await res.data;
        console.log(data);

        const listBlogURL = data.list.map((item) => {
          return item;
        });

        const listBlogURLReverse = listBlogURL.reverse();

        // Init pagination count for NEW POST
        const newPostCount = Math.ceil(data.count / 3); // 3 is the number of post per page
        setNewPostPagCount(newPostCount);

        // Source blog list
        for (var i = 0; i < data.count; ++i) {
          const res = await axios.get(listBlogURL[i]);
          tempListContent.push(res.data);
        }
        setInitBlogList(tempListContent);

        // New blog list
        for (var j = 0; j < newPostCount; ++j) {
          const res = await axios.get(listBlogURLReverse[j]);
          tempListContent1.push(res.data);
        }

        setListBlogContent(tempListContent1);
      } catch (error) {
        console.error(error);
      }
    };

    getBlogManagement();
  }, []);

  // Init start blog list
  useEffect(() => {
    if (localStorage.getItem("start")) {
      const tempList = JSON.parse(localStorage.getItem("start"));
      setBlogStartList(tempList);
    }
  }, []);

  const handleAddStarPost = (e, id) => {
    // console.log(id);
    if (!localStorage.getItem("start")) {
      let startList = [];
      startList.push(id);
      setBlogStartList(startList);
      localStorage.setItem("start", JSON.stringify(startList));
    } else {
      const startList = JSON.parse(localStorage.getItem("start"));
      if (startList.includes(id)) {
        const sortList = startList.filter((item) => {
          return item !== id;
        });
        setBlogStartList(sortList);
        localStorage.setItem("start", JSON.stringify(sortList));
      } else {
        let startList = JSON.parse(localStorage.getItem("start"));
        startList.push(id);
        setBlogStartList(startList);
        localStorage.setItem("start", JSON.stringify(startList));
      }
    }
  };

  const handleChangeNewPostPage = (e, id) => {
    // Set pagination
    setNewPostPag(id);
    const begin = (id - 1) * 3;
    const end = (id - 1) * 3 + 3;
    const items = initBlogList.slice(begin, end);
    setListBlogContent(items);
  };

  return (
    <div className="app">
      <Nav navOpen={navOpen} />
      <i
        className="fa-solid fa-bars nav-menu-icon"
        onClick={(e) => handleOpenNav()}
      ></i>
      <MyRoutes
        initBlogList={initBlogList}
        listBlogContent={listBlogContent}
        handleAddStarPost={handleAddStarPost}
        blogStartList={blogStartList}
        newPostPagCount={newPostPagCount}
        newPostPag={newPostPag}
        handleChangeNewPostPage={handleChangeNewPostPage}
      />
    </div>
  );
}

export default App;
