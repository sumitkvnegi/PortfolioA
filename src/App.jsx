import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import Home from "./components";
import Project from "./components/Project";
import Skill from "./components/Skill";
import data from "../public/data.json";
import MyContext from "./MyContext";
import LoadingScreen from "./LoadingScreen";
import Topics from "./components/Topics";

const App = () => {
  const contextValue = {
    ...data,
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const asyncLoad = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };
    asyncLoad();
  }, []);
  return (
    <MyContext.Provider value={contextValue}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Layout>
          <Home />
          <Project />
          <Skill />
          <Topics />
        </Layout>
      )}
    </MyContext.Provider>
  );
};

export default App;
