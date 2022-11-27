import "./App.css";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { useState } from "react";

const variants = {
  odd: {
    backgroundColor: "#ff0000",
    color: "#000",
    scale: 0.8,
    transition: {
      duration: 2,
    },
  },
  even: {
    backgroundColor: "#003333",
    color: "#fff",
    transition: { duration: 1 },
  },
};

function App() {
  const [counter, setCounter] = useState(0);
  const y = useMotionValue(0);
  const backgroundColor = useTransform(y, [-50, 0, 50], ["#fff", "#999", "#000"]);


  return (
    <div>
      {/* EJEMPLO TRES */}
      <motion.div
        className="box"
        variants={variants}
        style={{backgroundColor,y}}
        drag
        dragMomentum={false}
        dragConstraints={{
          top: -50,
          left: -50,
          right: -50,
          bottom: -50,
        }}
        animate={counter % 2 === 0 ? "even" : "odd"}
      >
        {counter}
      </motion.div>
      <button onClick={() => setCounter((c) => c + 1)}>Incrementar!</button>
      {/* EJEMPLO DOS */}
      {/* <motion.div
        className="box"
        initial={{ scale: 1 }}
        animate={{
          scale:[1,2,2,1,1],
          rotate:[0,0,270,270,0],
          borderRadius:["20%", "20%", "50%", "50%", "20%"]
        }}
        transition={{ duration: 2 }}
      ></motion.div> */}
      {/* EJEMPLO UNO */}
      {/*   <motion.h1
        initial={{
          color:'#ff0000',
        }}
        animate={{
          y: 100,
          color: "#fff",
        }}
      >
        Hello World
      </motion.h1> */}
    </div>
  );
}

export default App;
