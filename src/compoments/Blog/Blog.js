import { useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./Blog.scss";

const Blog = (props) => {
  const { initBlogList, blogStartList, handleAddStarPost } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog | minhtrifit";
  }, []);
  return (
    <div className="blog-container">
      <Link className="back-btn" to="/">
        <p>Back</p>
      </Link>
      <p className="blog-title">BLOG PAGE</p>
      <p className="blog-description">
        Description: Không theo một quy tắc nào cả, chỉ đơn giản là nghĩ sao
        viết vậy :))
      </p>
      <Form.Select className="blog-select">
        <option>Choose category</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <div className="post-content">
        {initBlogList.map((item) => {
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
};

export default Blog;
