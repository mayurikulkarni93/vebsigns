import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

const Counter = ({ value }) => {
  const [suffix, setSuffix] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (value.includes("M")) {
      setSuffix("M");
      setEndValue(parseInt(value.replace("M", ""), 10));
    } else if (value.includes("%")) {
      setSuffix("%");
      setEndValue(parseInt(value.replace("%", ""), 10));
    } else {
      setEndValue(parseInt(value, 10));
    }
  }, [value]);

  const count = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, endValue, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [endValue]);

  return (
    <motion.span>
      {displayValue}
      <span className="text-5xl">{suffix}</span>
    </motion.span>
  );
};
export default Counter;