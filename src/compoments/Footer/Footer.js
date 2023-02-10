import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-title">Copyright ©: minhtrifit</p>
      <p className="footer-text">
        "You are not a failure, what you need is a reason"
      </p>
      <div className="footer-links">
        <a href="https://www.facebook.com/minhtrifit" target="blank">
          <i className="fa-brands fa-facebook nav-links-icon"></i>
        </a>
        <a href="https://github.com/minhtrifit" target="blank">
          <i className="fa-brands fa-github nav-links-icon"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/lê-minh-trí-89ab94215"
          target="blank"
        >
          <i className="fa-brands fa-linkedin nav-links-icon"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UC76ICSmHFRLTmDQeFxHdUJA"
          target="blank"
        >
          <i className="fa-brands fa-youtube nav-links-icon"></i>
        </a>
        <a href="https://www.instagram.com/_lm.tri_" target="blank">
          <i className="fa-brands fa-square-instagram nav-links-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
