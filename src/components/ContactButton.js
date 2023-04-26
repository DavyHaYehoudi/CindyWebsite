import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const ContactButton = () => {
  const [animate, setAnimate] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  useEffect(() => {
    if (inView) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [inView]);

  return (
    <Link to="/contact#form">
      <div className={animate && "contactButtonAnimated"} ref={ref}>
        <button className="Button contactButton">
          VOUS SOUHAITEZ ME CONTACTER
        </button>
      </div>
    </Link>
  );
};

export default ContactButton;
