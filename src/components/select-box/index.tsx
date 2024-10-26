import { useState } from "react";
import classes from "./Style.module.scss";
import clsx from "clsx";
import { FaAngleDown } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
const Cover = ({
  items,
  onChange,
}: {
  items: string[];
  onChange: (value: string[]) => void;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [itemsList, setItemsList] = useState<string[]>(items);
  const [input, setInput] = useState<string>("");

  const handleSelect = (e: any, item: string) => {
    e.stopPropagation();
    if (selected.includes(item)) {
      const changedItems = selected.filter((arg) => arg !== item);
      setSelected(changedItems);
      onChange(changedItems);
    } else {
      const changedItems = [...selected, item];
      setSelected(changedItems);
      onChange(changedItems);
    }
  };
  const handleInput = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" && Boolean(input.length)) {
      setItemsList([input, ...itemsList]);
      setInput("");
    }
  };

  const boxVariants = {
    hidden: { opacity: 0, y: -10 }, // Initial state
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Transition when visible
  };

  return (
    <>
      <div className={classes["select-box"]}>
        <div
          className={clsx(
            classes["select-box_input"],

            isOpen && classes["select-box_active"]
          )}
        >
          <input
            value={input}
            placeholder="Science"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleInput}
            onClick={() => setIsOpen(true)}
          />
          <FaAngleDown
            color="#a6a4a4"
            onClick={() => setIsOpen(!isOpen)}
            className={clsx(isOpen && "rotate-180")}
          />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={classes["select-box_items"]}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={boxVariants}
            >
              <ul>
                {itemsList.map((item) => (
                  <li
                    onClick={(e) => handleSelect(e, item)}
                    key={item}
                    className={
                      selected.includes(item)
                        ? "bg-primary/15 text-primary"
                        : ""
                    }
                  >
                    {item}
                    {selected.includes(item) && <FaCheck />}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* overlay click for close select box */}
      <div
        className=" fixed top-0 bottom-0  left-0 right-0 z-0"
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default Cover;
