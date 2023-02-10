import { Link } from "react-router-dom";
import "./StarPost.scss";

const StartPost = (props) => {
  const { initBlogList, handleAddStarPost, blogStartList } = props;
  // console.log(blogStartList.length);
  return (
    <div className="star-blog-container">
      <div className="title">
        <i className="fa-solid fa-pen title-icon"></i>
        <p className="title-text">
          STAR POST: Blogs have your star, click on the image to read
        </p>
      </div>
      <div className="post-content">
        {blogStartList.length !== 0 ? (
          initBlogList.map((item) => {
            return (
              blogStartList.includes(item.id) && (
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
              )
            );
          })
        ) : (
          <p className="star-list-warning">YOU HAVE NOT STARED ANY POST YET</p>
        )}
      </div>
    </div>
  );
};

export default StartPost;
