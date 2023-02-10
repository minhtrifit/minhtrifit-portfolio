import { useEffect, useState } from "react";
import axios from "axios";
// import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./compoments/Nav/Nav";
import MyRoutes from "./compoments/MyRoutes/MyRoutes";

function App() {
  const blogManagementLink = "./blog content/blogManagement.json";
  const [navOpen, setNavOpen] = useState(false);
  const [listBlogContent, setListBlogContent] = useState([]);

  const handleOpenNav = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const getBlogManagement = async () => {
      try {
        const res = await axios.get(blogManagementLink);
        const data = await res.data;

        const listBlogURL = data.list.map((item) => {
          return item;
        });

        const tempListContent = [];
        for (var i = 0; i < data.count; ++i) {
          const res = await axios.get(listBlogURL[i]);
          tempListContent.push(res.data);
        }
        console.log(tempListContent);
        setListBlogContent(tempListContent);
      } catch (error) {
        console.error(error);
      }
    };

    getBlogManagement();
  }, []);

  const handleAddStarPost = (e, id) => {
    console.log(id);
  };

  return (
    <div className="app">
      <Nav navOpen={navOpen} />
      <i
        className="fa-solid fa-bars nav-menu-icon"
        onClick={(e) => handleOpenNav()}
      ></i>
      <MyRoutes
        listBlogContent={listBlogContent}
        handleAddStarPost={handleAddStarPost}
      />
    </div>
  );
}

export default App;
