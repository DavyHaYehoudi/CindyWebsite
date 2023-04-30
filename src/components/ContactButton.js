import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

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
    <Link to="/contact">
      <div className={animate ? "contactButtonAnimated":undefined} ref={ref}>
        <button className="Button contactButton">
          VOUS SOUHAITEZ ME CONTACTER
        </button>
      </div>
    </Link>
  );
};

export default ContactButton;
