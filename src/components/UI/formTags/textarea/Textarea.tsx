import {
  Textarea as TextareaCM,
  FormLabel,
  InputGroup,
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

const Textarea: FC<Props> = ({ label, className, formik, name, detail }) => {
  return (
    <div className={clsx("col-span-2", className)}>
      <div className="flex items-center">
        <FormLabel>{label}</FormLabel>
        {Boolean(detail) && (
          <span className="text-sm text-gray-400 mb-2 mr-1">{detail}</span>
        )}
      </div>
      <InputGroup>
        <TextareaCM
          background={"white"}
          dir={"rtl"}
          name={name}
          {...formik?.getFieldProps(name)}
        />
      </InputGroup>
    </div>
  );
};

export default Textarea;
