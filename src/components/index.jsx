import React from "react";
import { FaInstagram } from "react-icons/fa";
import ShimmerImage from "../ShimmerImage";

const Home = () => {
  return (
    <div className="w-full bg-[url('/bg.jpg')] rounded-md bg-cover bg-no-repeat h-screen">
      <div className="backdrop-filter backdrop-blur-sm p-6 flex items-center justify-between ">
        <div className="flex items-center gap-8 ">
          {/* Profile Photo */}
          <div className="w-48 border-[6px] border-fourDark/25 overflow-hidden rounded-full aspect-square">
            <ShimmerImage
              src="/sumit.jpg"
              alt="profile image"
              classStyle="w-full"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold font-mono tracking-wide">
              Sumit Negi
            </h1>
            <p
              className="tracking-widest text-sm font-serif text-sky-200"
              title="https://www.instagram.com/kv369d/"
            >
              @kv369d
            </p>
          </div>
        </div>
        <button className="bg-sky-600 p-3 rounded-md shadow-md flex items-center gap-2 text-sm tracking-wide">
          <FaInstagram size={20} />
          Follow me on Instagram
        </button>
      </div>
    </div>
  );
};

export default Home;
