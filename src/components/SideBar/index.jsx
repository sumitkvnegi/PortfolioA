import React from "react";
import tw from "tailwind-styled-components";
import { FaUserAstronaut } from "react-icons/fa6";
import {
  FaProjectDiagram,
  FaLightbulb,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SideBar = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <FaUserAstronaut size={25} className="text-threeDark" /> Home
        </Li>
        <Li>
          <FaProjectDiagram size={25} className="text-threeDark" /> Projects
        </Li>
        <Li>
          <FaLightbulb size={25} className="text-threeDark" /> Skills
        </Li>
        <div className=" bg-one/20 rounded-full w-full h-1" />
        <Li>
          <FaGithub className="text-slate-200 cursor-pointer" size={25} />{" "}
          Github
        </Li>
        <Li>
          <FaLinkedin className="text-sky-400 cursor-pointer" size={25} />{" "}
          Linkedin
        </Li>
        <Li>
          <FaInstagram className="text-red-600 cursor-pointer" size={25} />{" "}
          Instagram
        </Li>
        <Li title="Click To Copy">
          <SiGmail className="text-yellow-600 cursor-pointer" size={25} /> Gmail
        </Li>
      </Ul>
    </Nav>
  );
};

const Nav = tw.nav`flex flex-col items-center`;
const Ul = tw.ul`flex flex-col gap-4 py-4`;
const Li = tw.li`py-4 text-gray-400 rounded-md hover:text-threeDark cursor-pointer transition-all ease-in-out duration-500 hover:-translate-y-2  flex items-center gap-5 pr-10 pl-4 text-md`;

export default SideBar;
