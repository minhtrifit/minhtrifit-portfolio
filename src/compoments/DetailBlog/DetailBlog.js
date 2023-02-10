import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailBlog.scss";

const DetailBlog = (props) => {
  const params = useParams();
  const { id } = params;
  const { initBlogList } = props;

  const targetBlog = initBlogList.find((item) => {
    return item.id === parseInt(id);
  });

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll top of page when re-render
    document.title = `Reading detail blog | minhtrifit`;
  }, []);

  // Convert content from JSON to HTML
  try {
    const contentStr = targetBlog.content;
    let contentStrInit = [];
    contentStrInit.push(contentStr);
    let contentStrConvert = contentStrInit
      .map((i) => i.replace(/\n/g, "<br />"))
      .join("");

    return (
      <div className="detail-blog-container">
        <Link className="back-btn" to="/blog">
          <p>Back</p>
        </Link>
        <p className="blog-title">Reading: {targetBlog.title}</p>
        <div className="blog-image">
          <img
            src={`../../img/blog/${targetBlog.id}.png`}
            alt={`${targetBlog.id}`}
          />
        </div>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: contentStrConvert }}
        ></div>
        <p className="blog-date">{targetBlog.date}</p>
      </div>
    );
  } catch (error) {
    return (
      <div className="detail-blog-container">
        <a className="back-warning-btn" href="/">
          <p>Back</p>
        </a>
        <p className="blog-warning">BLOG NOT FOUND</p>
      </div>
    );
  }
};

export default DetailBlog;
