import gsap from "gsap";
import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from('.Loader h1 span', {
      opacity: 0,
      duration: 0.9,
      stagger: 0.9, 
    });
    tl.to('.Loader h1 span', {
        opacity: 0,
        duration: 1,
        stagger: 1, 
      });
    tl.to('.Loader', {
        x:3500,
            
      });
  }, []);

  return (
    <div className="Loader">
      <h1>
        <span>We</span> <span>are </span><span>really</span> <br />
        <span>Ochi</span> <span>designers</span>
      </h1>
    </div>
  );
};

export default Loader;
