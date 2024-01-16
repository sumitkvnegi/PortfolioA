import React, { useContext, useState } from "react";
import MyContext from "../../MyContext";

const index = () => {
  const { topics } = useContext(MyContext);
  const [selectedTopic, setSelectedTopic] = useState(5);

  return (
    <div className="px-14">
      <h1 className="text-2xl tracking-wide font-semibold text-center items-center">
        Related To My Work
      </h1>
      <div className="flex flex-col-reverse w-full">
        <div className="flex flex-wrap gap-4 p-8 rounded-md justify-center">
          {topics.map((topic, index) => (
            <div
              key={topic.name}
              onClick={() => setSelectedTopic(index)}
              className={`rounded-full
              h-fit text-sm text-white capitalize w-fit py-2 px-4 flex items-center gap-1 transition-all ease-in-out duration-500 hover:scale-95 cursor-pointer ${
                selectedTopic == index ? "bg-fourDark/50" : "bg-two/40"
              }`}
            >
              <span className="text-lg">
                {selectedTopic == index ? "✔" : "+"}
              </span>
              {topic.name}
            </div>
          ))}
        </div>
        <div className="flex flex-row-reverse capitalize text-center relative">
          <img src="/working.png" className="w-1/3 mx-auto" />
          <div class="absolute top-10 right-0 bg-gray-800/20 text-white p-4 rounded-md w-1/3 animate-pulse">
            <p className="tracking-wide text-xs">
              {topics[selectedTopic].info}
            </p>
          </div>
          <div>
            <div
              //   id={skill} // Unique identifier for each skill bar
              className={`${
                "isVisible " ? "animate-float-in opacity-100" : "opacity-0"
              } fixed bottom-0 left-0 p-4 bg-gray-800 text-white rounded-t-md transition-all duration-500`}
            >
              <p className="mb-2 font-bold">skill</p>
              <div className="bg-blue-500 h-4 rounded-full">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  //   style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
