import React from "react";
import ShimmerImage from "../../ShimmerImage";
import { motion } from "framer-motion";

const Card = ({ index }) => {
  return (
    // <div
    //   className="flex flex-col mx-auto shadow-md rounded-lg overflow-hidden
    // bg-gradient-to-t from-one via-two to-one border-4  border-[#121424]
    // "
    // >
    <motion.div
      initial={{
        x: 1000,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
        delay: 0.1 * index,
      }}
      className="flex flex-col mx-auto shadow-md rounded-lg overflow-hidden 
        bg-gradient-to-t from-one via-two to-one border-4  border-[#121424] 
        "
    >
      <div className="w-full">
        <ShimmerImage
          src="/s1.png"
          alt="project image"
          classStyle="w-full h-auto"
        />
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-2">Project Name</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
        </p>
        <a href="#" className="text-blue-500 mt-2">
          Read more
        </a>
      </div>
      {/* </div> */}
    </motion.div>
  );
};

export default Card;
