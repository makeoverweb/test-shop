import cx from "classnames";

import "./styles.css";

interface Props {
  className?: string;
}

const NoMatch = ({ className }: Props) => (
  <div className={cx(className, "nomatch")}>
    <span className="text">404 page not found</span>
  </div>
);

export { NoMatch };
