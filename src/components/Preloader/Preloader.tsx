import { useState, useEffect } from "react";
import "./style.css";
import cx from "classnames";

interface IPreloader {
  className?: string;
}

const Preloader = (props: IPreloader): JSX.Element => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const x = setTimeout(() => {
      setCounter(counter + 1);
    }, 450);

    return () => {
      clearTimeout(x);
    };
  });

  return <span className={cx("preloader", props.className)} />;
};

export { Preloader };
