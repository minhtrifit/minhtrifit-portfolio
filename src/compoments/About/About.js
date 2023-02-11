import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./About.scss";

const About = (props) => {
  const { about } = props;

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll top of page when re-render
    document.title = `About | minhtrifit`;
  }, []);

  try {
    return (
      <div className="about-container">
        <Link className="back-btn" to="/">
          <p>Back</p>
        </Link>
        <div className="about-image">
          <img src="img/avatar.png" alt="avatar.png" />
        </div>
        <div className="about-content">
          <p className="about-name">Full name: {about.name}</p>
          <p className="about-school">Study: {about.school}</p>
          <p className="about-faculty">Faculty: {about.faculty}</p>
          <p className="about-contact">
            Contact: <a href={`${about.contact}`}>{about.contact}</a>
          </p>
          <p className="about-project">Personal project:</p>
          <div className="project-container">
            {about.project.map((item, index) => {
              return (
                <div className="project-card" key={item.name}>
                  <div className="card-left">
                    <img src={`./img/project/${item.image}`} alt={item.image} />
                  </div>
                  <div className="card-right">
                    <p className="name">
                      {index + 1}: {item.name}
                    </p>
                    <a className="link" href={`${item.github}`} target="blank">
                      {item.github}
                    </a>
                    <p className="description">
                      Description: {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error.message);
    return (
      <div className="about-warning-container">
        <a className="back-warning-btn" href="/">
          <p>Back</p>
        </a>
        <p className="about-warning">ABOUT NOT FOUND</p>
      </div>
    );
  }
};

export default About;
