import React, { ReactNode } from "react";
import classes from "./Card.module.scss";

interface Props {
  children: ReactNode;
}
const Card: React.FC<Props> = ({ children }: { children: ReactNode }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
