import DatePickerM from "@amir04lm26/react-modern-calendar-date-picker";
import { FC, useEffect, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "./DatePicker.scss";
import { FormLabel } from "@chakra-ui/react";

interface Props {
  label: string;
  formik?: any;
  name?: string;
}

const DatePicker: FC<Props> = ({ label, formik, name }) => {
  const [selectedDate, setSelectedDate] = useState<any>(null);

  useEffect(() => {
    if (formik?.values[name!]) {
      const splitedDate = formik?.values[name!].split("-");
      setSelectedDate({
        year: Number(splitedDate[0]),
        month: Number(splitedDate[1]),
        day: Number(splitedDate[2]),
      });
    }
  }, [formik?.values[name!]]);

  const handleBirthDay = (e: any) => {
    setSelectedDate(e);
    formik.setFieldValue(
      name,
      String(e.year) +
        "-" +
        String(e.month).padStart(2, "0") +
        "-" +
        String(e.day).padStart(2, "0")
    );
  };

  return (
    <div className="col-span-2">
      <FormLabel>{label}</FormLabel>
      <DatePickerM
        inputName={name}
        value={selectedDate}
        onChange={handleBirthDay}
        // renderInput={renderCustomInput} // custom input renderer
        shouldHighlightWeekends
        locale="fa" // setting locale to Persian
        inputClassName="chakra-input css-12ppgmq"
        inputPlaceholder=" "
        
        colorPrimary="#3182ce"
      />
    </div>
  );
};

export default DatePicker;
