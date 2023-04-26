import { useEffect, useState } from "react";

const useDrag = (x, y,defaultPosition) => {

  //  { x: 0, y: 0 } pour en haut à gauche
  // { x: windowWidth - x, y: y } pour en haut à droite (x=350;y=100)
  // Comme j'utilise ce Hook pour plusieurs éléments dont les positionnements par défaut changent, il y a le paramètre defaultPosition de valeur {x=0,y=0}
  
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setPosition(defaultPosition||{ x: windowWidth - x, y: y });
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  const handleMouseDown = (event) => {
    const startX = event.pageX - position.x;
    const startY = event.pageY - position.y;

    const handleMouseMove = (event) => {
      const newPosition = {
        x: event.pageX - startX,
        y: event.pageY - startY,
      };

      setPosition(newPosition);
    };

    document.addEventListener("mousemove", handleMouseMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleMouseMove);
    });
  };
  return { position, handleMouseDown };
};
export default useDrag;
