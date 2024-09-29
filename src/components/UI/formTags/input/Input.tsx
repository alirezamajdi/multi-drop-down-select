import {
  Input as InputCM,
  FormLabel,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import clsx from "clsx";
import { FC } from "react";


interface Props {
  label: string;
  type?: string;
  dir?: string;
  leftAddon?: string;
  className?: string;
  formik?: any;
  name?: string;
  detail?: string;
}
const Input: FC<Props> = ({
  label,
  type = "text",
  dir = "rtl",
  leftAddon,
  className,
  formik,
  name,
  detail,
}) => {
  return (
    <div className={clsx("col-span-2", className)}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <InputCM
          background={"white"}
          type={type}
          dir={dir}
          name={name}
          {...formik?.getFieldProps(name)}
        />
        {leftAddon && <InputLeftAddon>{leftAddon}</InputLeftAddon>}
      </InputGroup>
      {Boolean(detail) && <span>{detail}</span>}
    </div>
  );
};

export default Input;
