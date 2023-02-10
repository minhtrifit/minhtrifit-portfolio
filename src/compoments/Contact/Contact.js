import { useEffect } from "react";
import "./Contact.scss";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | minhtrifit";
  }, []);

  return <div className="contact-container">Contact</div>;
};

export default Contact;
