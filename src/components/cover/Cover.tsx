import { ReactNode } from "react";
import classes from "./Cover.module.scss";
import clsx from "clsx";

const Cover = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={clsx(classes.box, className)}>{children}</div>;
};

export default Cover;
