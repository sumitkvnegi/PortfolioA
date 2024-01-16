import React from "react";

const Container = ({ field, value }) => {
  const colors = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"];
  console.log(value);
  return (
    <div className="flex flex-col gap-4 bg-gradient-to-t from-one via-two to-one border-2 rounded-2xl border-[#222541] shadow-sm px-4 py-6 w-full">
      <h1 className="capitalize text-xl text-center">{field}</h1>
      <div className="flex flex-wrap gap-2">
        {value.map((skill) => (
          <div
            key={skill}
            style={{
              border: `1px solid ${
                colors[Math.floor(Math.random() * colors.length)]
              }`,
            }}
            className="bg-one p-4 text-sm rounded-md font-light tracking-wide text-gray-200 border-2 border-four w-fit"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
