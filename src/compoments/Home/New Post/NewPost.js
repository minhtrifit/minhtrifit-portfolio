import { Link } from "react-router-dom";
import "./NewPost.scss";

const NewPost = (props) => {
  const {
    listBlogContent,
    handleAddStarPost,
    blogStartList,
    newPostPagCount,
    newPostPag,
    handleChangeNewPostPage,
  } = props;

  let pagList = [];
  for (var i = 0; i < newPostPagCount; ++i) {
    const page = {
      id: i + 1,
      value: i + 1,
    };
    pagList.push(page);
  }

  return (
    <div className="new-post-container">
      <div className="title">
        <i className="fa-solid fa-pen title-icon"></i>
        <p className="title-text">NEW POST: Click blog image to see detail</p>
      </div>
      <div className="post-content">
        {listBlogContent.map((item) => {
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
      <div className="pagination">
        {pagList.map((item) => {
          return item.id === newPostPag ? (
            <p
              className="active"
              key={item.id}
              onClick={(e) => handleChangeNewPostPage(e, item.id)}
            >
              {item.value}
            </p>
          ) : (
            <p
              key={item.id}
              onClick={(e) => handleChangeNewPostPage(e, item.id)}
            >
              {item.value}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default NewPost;
