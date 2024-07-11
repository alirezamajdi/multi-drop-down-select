import { Select as SelectCM } from "@chakra-ui/react";
import "./Select.scss";

const Select = () => {
  return (
    <SelectCM>
      <option value="option1">منزل شخصی</option>
      <option value="option2">مراکز نگهداری</option>
      <option value="option3">منزل فرزندان</option>
    </SelectCM>
  );
};

export default Select;
