import React, { useState } from "react";
import Card from "./Card";

const Projects = () => {
  const [data, setData] = useState(["", "", "", ""]);
  return (
    <div className="px-14">
      <h1 className="text-2xl tracking-wide font-semibold">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-6">
        {data.map((cardInfo, index) => (
          <Card key={cardInfo} info={cardInfo} index={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
