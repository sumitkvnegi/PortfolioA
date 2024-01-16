// LoadingScreen.js
import React, { useState, useEffect } from "react";

const LoadingScreen = () => {
  const languages = [
    { language: "Hindi", hello: "नमस्ते" },
    { language: "English", hello: "Hello" },
    { language: "Japanese", hello: "こんにちは" },
    { language: "Sanskrit", hello: "नमस्कारः" },
    { language: "Korean", hello: "안녕하세요" },
    { language: "French", hello: "Bonjour" },
    { language: "Spanish", hello: "Hola" },
  ];

  const fonts = ["Grape Nuts", "Homemade Apple", "Nothing You Could Do"];

  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    // Simulate a delay for demonstration purposes (replace this with your actual loading logic)
    const loadingTimeout = setTimeout(() => {
      // Hide loading screen (remove the loading class)
      document.body.classList.remove("loading");
    }, 3000); // Simulated 3 seconds delay

    // Change language every 1 second
    const languageInterval = setInterval(() => {
      setCurrentLanguageIndex(
        (prevIndex) => (prevIndex + 1) % languages.length
      );
    }, 1000);

    // Cleanup the timeout and interval when the component unmounts
    return () => {
      clearTimeout(loadingTimeout);
      clearInterval(languageInterval);
    };
  }, [languages]);

  const getHelloMessage = (language) => {
    const selectedLanguage = languages.find(
      (lang) => lang.language === language
    );
    return selectedLanguage ? selectedLanguage.hello : "";
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-one custom-scrollbar text-white overflow-hidden"
      style={{
        fontFamily: `${fonts[Math.floor(Math.random() * fonts.length)]}`,
      }}
    >
      <div className="text-4xl mb-4">
        {getHelloMessage(languages[currentLanguageIndex].language)}
      </div>
      <div className="w-16 flex justify-center items-center mx-auto pl-4">
        <svg
          version="1.1"
          id="L4"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 0 0"
          xml:space="preserve"
        >
          <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.1"
            />
          </circle>
          <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.2"
            />
          </circle>
          <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.3"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;
