import { motion } from "framer-motion";
import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";

const Header = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="fixed z-10 w-full h-16 flex justify-between items-center md:px-14 bg-[#ffe605]">
      <div className="font-medium py-5 pl-5 xl:text-[1.2vw]">Bang Studios</div>
      <ul className="hidden md:flex space-x-8 font-medium xl:text-[1.2vw]">
        <li>Home</li>
        <li>About</li>
        <li>Art</li>
        <li>Contact</li>
      </ul>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="flex group relative md:hidden h-full w-16 justify-center items-center cursor-pointer"
      >
        <motion.div
          animate={{
            width: hover ? "100%" : 0,
            height: hover ? "100%" : 0,
            transition: {
              ease: "easeOut",
              duration: 0.3,
            },
          }}
          whileTap={{ scale: 0.95 }}
          className="absolute top-0 right-0 bg-white z-10"
        ></motion.div>
        <CgMenuGridR className="flex relative w-7 h-7 text-black z-10 pointer-events-none" />
      </div>
    </div>
  );
};

export default Header;
