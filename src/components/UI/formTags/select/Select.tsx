import { Select as SelectCM, FormLabel } from "@chakra-ui/react";
import "./Select.scss";
import { FC, ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children?: ReactNode;
  label?: string;
  className?: string;
  formik?: any;
  name?: string;
}
const Select: FC<Props> = ({ children, label, className, name, formik }) => {
  return (
    <div className={clsx("col-span-2", className)}>
      <FormLabel>{label}</FormLabel>
      <SelectCM name={name} {...formik?.getFieldProps(name)}>
        {children}
      </SelectCM>
    </div>
  );
};

export default Select;
