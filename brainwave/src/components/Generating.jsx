import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { loading } from "../assets";

const Generating = ({ className }) => {

  const loadingRef = useRef(null);

  useEffect(() => {
    gsap.to(loadingRef.current, {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: "linear",
    });
  }, []);
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-6 h-6 mr-4" src={loading} alt="Loading" ref={loadingRef} />
      AI is generating
    </div>
  );
};

export default Generating;