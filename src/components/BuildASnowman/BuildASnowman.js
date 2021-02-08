import "./BuildASnowman.css";
import { motion } from "framer-motion";

export default function BuildASnowman() {
  return (
    <div className="snowman-page" id="snowman">
      <motion.h1
        className="title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>Do you wanna build a Snowman?</p>
      </motion.h1>
      <motion.div
        className="circle-large"
        drag
        dragMomentum={false}
        style={{
          left: `${Math.random() * 80 + 5}vw`,
          top: `${Math.random() * 80 + 5}vh`,
        }}
      ></motion.div>
      <motion.div
        className="circle-medium"
        drag
        dragMomentum={false}
        style={{
          left: `${Math.random() * 80 + 5}vw`,
          top: `${Math.random() * 80 + 5}vh`,
        }}
      ></motion.div>
      <motion.div
        className="circle-small"
        drag
        dragMomentum={false}
        style={{
          left: `${Math.random() * 80 + 5}vw`,
          top: `${Math.random() * 80 + 5}vh`,
        }}
      ></motion.div>
      <motion.div
        className="coal"
        drag
        dragMomentum={false}
        style={{
          left: `${Math.random() * 80 + 5}vw`,
          top: `${Math.random() * 80 + 5}vh`,
        }}
      ></motion.div>
      <motion.div
        className="coal"
        drag
        dragMomentum={false}
        style={{
          left: `${Math.random() * 80 + 5}vw`,
          top: `${Math.random() * 80 + 5}vh`,
        }}
      ></motion.div>
      <motion.div
        className="coal"
        drag
        dragMomentum={false}
        style={{
          left: `${Math.random() * 80 + 5}vw`,
          top: `${Math.random() * 80 + 5}vh`,
        }}
      ></motion.div>
      <motion.div
        className="coal"
        drag
        dragMomentum={false}
        style={{
          left: `${Math.random() * 80 + 5}vw`,
          top: `${Math.random() * 80 + 5}vh`,
        }}
      ></motion.div>
      <motion.div
        className="coal"
        drag
        dragMomentum={false}
        style={{
          left: `${Math.random() * 80 + 5}vw`,
          top: `${Math.random() * 80 + 5}vh`,
        }}
      ></motion.div>
      <motion.div
        className="stick-left"
        drag
        dragMomentum={false}
        style={{
          left: `${Math.random() * 80 + 5}vw`,
          top: `${Math.random() * 80 + 5}vh`,
        }}
      ></motion.div>
      <motion.div
        className="stick-right"
        drag
        dragMomentum={false}
        style={{
          left: `${Math.random() * 80 + 5}vw`,
          top: `${Math.random() * 80 + 5}vh`,
        }}
      ></motion.div>
      <motion.div
        className="carrot"
        drag
        dragMomentum={false}
        style={{
          left: `${Math.random() * 80 + 5}vw`,
          top: `${Math.random() * 80 + 5}vh`,
        }}
      ></motion.div>
    </div>
  );
}
