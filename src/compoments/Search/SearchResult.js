import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SearchResult.scss";

const SearchResult = (props) => {
  const { searchBar, searchList, blogStartList, handleAddStarPost } = props;

  useEffect(() => {
    document.title = "Search | minhtrifit";
  }, []);

  if (typeof searchBar !== "undefined" && searchList.length !== 0) {
    return (
      <div className="search-blog-container">
        <Link className="back-btn" to="/">
          <p>Back</p>
        </Link>
        <p className="search-title">Result for search: {searchBar}</p>
        <div className="post-content">
          {searchList.map((item) => {
            return blogStartList.includes(item.id) ? (
              <div className="post-card" key={item.id}>
                <Link className="card-image" to={`/blog/${item.id}`}>
                  <img src={`img/blog/${item.id}.png`} alt={`${item.id}`} />
                </Link>
                <div className="card-content">
                  <p>
                    Blog {item.id}: {item.title}
                  </p>
                  <p>Category: {item.category}</p>
                  <p>Date: {item.date}</p>
                  <i
                    className="fa-solid fa-star card-star active"
                    onClick={(e) => {
                      handleAddStarPost(e, item.id);
                    }}
                  ></i>
                </div>
              </div>
            ) : (
              <div className="post-card" key={item.id}>
                <Link className="card-image" to={`/blog/${item.id}`}>
                  <img src={`img/blog/${item.id}.png`} alt={`${item.id}`} />
                </Link>
                <div className="card-content">
                  <p>
                    Blog {item.id}: {item.title}
                  </p>
                  <p>Category: {item.category}</p>
                  <p>Date: {item.date}</p>
                  <i
                    className="fa-solid fa-star card-star"
                    onClick={(e) => {
                      handleAddStarPost(e, item.id);
                    }}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  if (typeof searchBar !== "undefined" && searchList.length === 0) {
    return (
      <div className="search-blog-container">
        <Link className="back-warning-btn" to="/">
          <p>Back</p>
        </Link>
        <p className="search-warning">SEARCH NOT FOUND</p>
      </div>
    );
  } else {
    return (
      <div className="search-blog-container">
        <a className="back-warning-btn" href="/">
          <p>Back</p>
        </a>
        <p className="search-warning">SEARCH NOT FOUND</p>
      </div>
    );
  }
};

export default SearchResult;
