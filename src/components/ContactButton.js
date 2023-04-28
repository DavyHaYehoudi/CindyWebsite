import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { HashLink } from "react-router-hash-link";

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
    <HashLink to="/contact">
      <div className={animate && "contactButtonAnimated"} ref={ref}>
        <button className="Button contactButton">
          VOUS SOUHAITEZ ME CONTACTER
        </button>
      </div>
    </HashLink>
  );
};

export default ContactButton;
