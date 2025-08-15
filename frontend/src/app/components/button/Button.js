import Link from "next/link";
import styles from "./button.module.sass";
import { FaArrowRight } from "react-icons/fa";

export const IconTypes = {
  ARROW_RIGHT: "ARROW_RIGHT",
};

const Button = (props) => {
  if (props.href) {
    return (
      <Link className={`${styles.button}`} href={props.href}>
        {props.children}
        <Button.Icon iconType={props.icon} />
      </Link>
    );
  }
  return <button className={`${styles.button}`}>{props.children}</button>;
};

Button.Icon = ({ iconType }) => {
  if (iconType == IconTypes.ARROW_RIGHT) {
    return <FaArrowRight />;
  }
};

Button.Icon.displayName = "Icon";

export default Button;
