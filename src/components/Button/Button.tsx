import "./styles.css";
import cx from "classnames";
import { CSSProperties } from "react";

interface IButton {
  className?: string;
  style?: CSSProperties;
  width?: number;
  height?: number;
  text?: React.ReactNode;
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
}

const Button: React.ElementType<IButton> = (props: IButton) => {
  const style = { width: props.width, height: props.height, ...props.style };
  const className = cx("button", props.className);

  return (
    <button
      type={props.type}
      style={style}
      className={className}
      disabled={props.disabled}
      {...props}
    >
      {props.children || props.text}
    </button>
  );
};

export { Button };
