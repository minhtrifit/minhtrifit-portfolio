import { useEffect, useState } from "react";
import axios from "axios";
// import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./compoments/Nav/Nav";
import MyRoutes from "./compoments/MyRoutes/MyRoutes";

function App() {
  const blogManagementLink = "./blog content/blogManagement.json"; // URL blog management
  const aboutManagementLink = "./About/About.json"; // URL about management

  // Blog type state
  const [initBlogList, setInitBlogList] = useState([]); // set 1 times when loading page
  const [listBlogContent, setListBlogContent] = useState([]);
  const [blogStartList, setBlogStartList] = useState([]);
  const [blogCategory, setBlogCategory] = useState([]);
  const [blogCategoryList, setBlogCategoryList] = useState();
  const [selectedOption, setSelectedOption] = useState("Choose category");
  const [about, setAbout] = useState({});
  const [searchBar, setSearchBar] = useState();
  const [searchList, setSearchList] = useState([]);

  // Pagination state
  const [newPostPagCount, setNewPostPagCount] = useState(0);
  const [newPostPag, setNewPostPag] = useState(1);

  // Other state
  const [navOpen, setNavOpen] = useState(false);

  //========================================================================================

  const handleOpenNav = () => {
    setNavOpen(!navOpen);
  };

  // Call API when init page
  useEffect(() => {
    const getBlogManagement = async () => {
      try {
        const tempListContent = [];
        const tempListContent1 = [];
        let tempListContent2 = [];
        const res = await axios.get(blogManagementLink);
        const data = await res.data;
        console.log(data);

        const listBlogURL = data.list.map((item) => {
          return item;
        });

        const listBlogURLReverse = listBlogURL.reverse();

        //================================= Init pagination count for NEW POST
        const newPostCount = Math.ceil(data.count / 3); // 3 is the number of post per page
        setNewPostPagCount(newPostCount);

        //================================= Source blog list
        for (var i = 0; i < data.count; ++i) {
          const res = await axios.get(listBlogURL[i]);
          tempListContent.push(res.data);
        }
        setInitBlogList(tempListContent);
        setBlogCategory(tempListContent);

        //================================= New blog list
        for (var j = 0; j < newPostCount; ++j) {
          const res = await axios.get(listBlogURLReverse[j]);
          tempListContent1.push(res.data);
        }

        setListBlogContent(tempListContent1);

        //================================= Category blog list
        tempListContent2 = tempListContent.map((item) => {
          return item.category;
        });

        // Function remove duplicate category
        const unique = (arr) => {
          var newArr = [];
          newArr = arr.filter(function (item) {
            return newArr.includes(item) ? "" : newArr.push(item);
          });
          return newArr;
        };

        tempListContent2 = unique(tempListContent2);
        setBlogCategoryList(tempListContent2);

        //================================= About infomation
        const res1 = await axios.get(aboutManagementLink);
        const data1 = res1.data;
        setAbout(data1);
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

  const handleSetBlogCategory = (e, value) => {
    let sortCategoryValue = [];
    if (value !== "Choose category") {
      sortCategoryValue = initBlogList.filter((item) => {
        return item.category === value;
      });
      setBlogCategory(sortCategoryValue);
      setSelectedOption(value);
    } else {
      setBlogCategory(initBlogList);
      setSelectedOption("Choose category");
    }
  };

  const handleSearchBar = (e) => {
    const searchListResult = initBlogList.filter((item) => {
      return (
        item.title.toUpperCase().includes(searchBar.toUpperCase()) ||
        item.id === parseInt(searchBar) ||
        item.category.toUpperCase().includes(searchBar.toUpperCase())
      );
    });

    setSearchList(searchListResult);
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
        handleSetBlogCategory={handleSetBlogCategory}
        blogCategoryList={blogCategoryList}
        blogCategory={blogCategory}
        selectedOption={selectedOption}
        about={about}
        searchBar={searchBar}
        setSearchBar={setSearchBar}
        handleSearchBar={handleSearchBar}
        searchList={searchList}
      />
    </div>
  );
}

export default App;
