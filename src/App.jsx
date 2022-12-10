/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-bitwise */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { motion } from "framer-motion";
import { useState } from "react";
import "./App.css";
import image1 from "./assets/image1.jpg";
import image10 from "./assets/image10.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import image5 from "./assets/image5.jpg";
import image6 from "./assets/image6.jpg";
import image7 from "./assets/image7.jpg";
import image8 from "./assets/image8.jpg";
import image9 from "./assets/image9.jpg";

function App() {
  const maxDifference = window.innerWidth / 2;
  let difference = 0;
  const width = 22;
  const [start, setStart] = useState(0);
  const [finish, setFinish] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [lastPercentage, setLastPercentage] = useState(0);
  const [imagePosition, setImagePosition] = useState(0);

  const mousedown = (e) => {
    setStart(e.clientX);
    setIsMouseDown(true);
  };

  const mousemove = (e) => {
    setFinish(e.clientX);
    finish === 0 ? (difference = 0) : (difference = start - finish);

    setPercentage(
      Math.max(
        0,
        Math.min(
          100 * (width / 6),
          Number(
            ((100 * difference) / maxDifference) * (width / 6) + lastPercentage,
          ),
        ),
      ),
    );

    console.log(percentage);

    setImagePosition(
      Math.max(5, Math.min(85, Number(percentage / (width / 6)))),
    );
  };

  const mouseup = () => {
    setLastPercentage(percentage);
    setFinish(0);
    setIsMouseDown(false);
  };

  return (
    <div
      className="z-100 h-screen w-screen "
      onMouseDown={mousedown}
      onMouseUp={mouseup}
      onMouseMove={isMouseDown ? mousemove : null}
    >
      <div
        className="absolute top-[50%] left-[50%] flex space-x-4"
        style={{
          transform: isMouseDown
            ? `translate(${-percentage}%,-55%)`
            : `translate(${-lastPercentage}%,-55%)`,
        }}
      >
        <Image src={image1} alt="" position={imagePosition} width={width} />
        <Image src={image2} alt="" position={imagePosition} width={width} />
        <Image src={image3} alt="" position={imagePosition} width={width} />
        <Image src={image4} alt="" position={imagePosition} width={width} />
        <Image src={image5} alt="" position={imagePosition} width={width} />
        <Image src={image6} alt="" position={imagePosition} width={width} />
        <Image src={image7} alt="" position={imagePosition} width={width} />
        <Image src={image8} alt="" position={imagePosition} width={width} />
        <Image src={image9} alt="" position={imagePosition} width={width} />
        <Image
          src={image10}
          alt=""
          draggable="false"
          position={imagePosition}
          width={width}
        />
      </div>
    </div>
  );
}
function Image({ src, alt, position, width }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className="drag-none h-[32rem] select-none object-cover"
      draggable="false"
      style={{
        width: `${width}rem`,
        objectPosition: `${position}% 50%`,
      }}
      transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
    />
  );
}

export default App;
