import { FC } from "react";
import { Checkbox as CheckboxCM } from "@chakra-ui/react";
import clsx from "clsx";

interface Props {
  label: string;
  className?: string;
  formik?: any;
  name?: string;
}
const Checkbox: FC<Props> = ({ label, className, formik, name }) => {
  return (
    <div className={clsx("flex items-center", className)}>
      <CheckboxCM dir="rtl" name={name} {...formik?.getFieldProps(name)}>
        {label}
      </CheckboxCM>
    </div>
  );
};

export default Checkbox;
