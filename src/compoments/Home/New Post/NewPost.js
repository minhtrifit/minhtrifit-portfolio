import { Link } from "react-router-dom";
import "./NewPost.scss";

const NewPost = (props) => {
  const { listBlogContent, handleAddStarPost } = props;
  return (
    <div className="new-post-container">
      <div className="title">
        <i className="fa-solid fa-pen title-icon"></i>
        <p className="title-text">New Post: Click blog image to see detail</p>
      </div>
      <div className="post-content">
        {listBlogContent.map((item) => {
          return (
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
};

export default NewPost;
