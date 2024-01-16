import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ShimmerImage = ({ src, alt, classStyle }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      setImageLoaded(true);
    };
  }, [src]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {!imageLoaded && (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.6, yoyo: Infinity }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%)",
            backgroundSize: "200% 100%",
          }}
          className={`${classStyle}`}
        />
      )}

      {imageLoaded && (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          src={src}
          alt={alt}
          className={`${classStyle}`}
        />
      )}
    </div>
  );
};

export default ShimmerImage;
