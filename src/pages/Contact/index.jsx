import { useState } from "react";
import { func } from "prop-types";
import { motion } from "framer-motion";
import c from "./style.module.css";
import { TimesIcon, coder } from "assets";
import { framerVariants, itemVariants, msgData } from "static";

const Contact = ({ setIsContacted }) => {
  const [selectedOption, setSelectedOption] = useState({ key: "", text: "" });
  const [showNext, setshowNext] = useState(false);
  const handleSendMsg = (key, text) => {
    setSelectedOption({ ...selectedOption, key, text });
    setshowNext(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={c.contact__main}
    >
      <div className={c.contact__head + " flex"}>
        <div className="flex">
          <img src={coder} alt="Ilhomjon dev" />
          <div className={c.head__text}>
            <h1>Dev bro</h1>
            <p>You can ask questions</p>
          </div>
        </div>
        <TimesIcon
          className={c.times__icon}
          onClick={() => setIsContacted(false)}
        />
      </div>
      <motion.div
        className={c.messages}
        initial="closed"
        animate="open"
        exit="closed"
        variants={framerVariants}
      >
        {msgData.greeting.map((msg) => (
          <motion.div className={c.msg} variants={itemVariants} key={msg}>
            {msg}
          </motion.div>
        ))}
        {selectedOption.text && (
          <div className={c.replied}>{selectedOption?.text}</div>
        )}
        {!showNext ? (
          <div className={c.options}>
            {msgData.options.map(({ key, text }) => (
              <motion.div
                className={c.option__btn}
                variants={itemVariants}
                key={key}
                onClick={() => handleSendMsg(key, text)}
              >
                {text}
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className={c.options}
            initial="closed"
            animate="open"
            exit="closed"
            variants={framerVariants}
          >
            {msgData[selectedOption.key].map((msg) => (
              <motion.div className={c.msg} variants={itemVariants} key={msg}>
                {msg}
              </motion.div>
            ))}
          </motion.div>
        )}
        {selectedOption.key.includes("helloReply") && (
          <div className={c.options}>
            {msgData.options.map(({ key, text }) => (
              <motion.div
                className={c.option__btn}
                variants={itemVariants}
                key={key}
                onClick={() => handleSendMsg(key, text)}
              >
                {text}
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Contact;
Contact.propTypes = {
  setIsContacted: func.isRequired,
};
