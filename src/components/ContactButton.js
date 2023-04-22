import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <Link to='/contact' >
      <button
        className="Button contactButton"
      >VOUS SOUHAITEZ ME CONTACTER</button>
    </Link>
  );
};

export default ContactButton;
