import { FC, ReactNode } from "react";
import { FormLabel, RadioGroup, Stack, Radio } from "@chakra-ui/react";
import clsx from "clsx";

interface Props {
  label: string;
  className?: string;
  formik?: any;
  name?: string;
  children?: ReactNode;
}
const RadioCM: FC<Props> = ({ label, className, formik, name, children }) => {
  return (
    <div className={clsx("", className)}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup dir="rtl" name={name} {...formik?.getFieldProps(name)}>
        <Stack direction="row">
          {children || (
            <>
              <Radio value="2">بله</Radio>
              <Radio value="3">خیر</Radio>
            </>
          )}
        </Stack>
      </RadioGroup>
    </div>
  );
};

export default RadioCM;
