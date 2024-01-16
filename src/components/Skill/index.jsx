import React, { useContext } from "react";
import Container from "./Container";
import MyContext from "../../MyContext";

const Skills = () => {
  const { technicalSkills } = useContext(MyContext);
  return (
    <div className="px-14">
      <h1 className="text-2xl tracking-wide font-semibold">What I Know</h1>
      <div className="flex items-start justify-between my-10 gap-8">
        {Object.entries(technicalSkills).map((data, index) => (
          <Container key={index} field={data[0]} value={data[1]} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
