import DatePickerM from "@amir04lm26/react-modern-calendar-date-picker";
import { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "./DatePicker.scss";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<any>(null);

  return (
    <DatePickerM
      value={selectedDate}
      onChange={setSelectedDate}
      // renderInput={renderCustomInput} // custom input renderer
      shouldHighlightWeekends
      locale="fa" // setting locale to Persian
      inputClassName="chakra-input css-12ppgmq"
      inputPlaceholder=" "
      
    />
  );
};

export default DatePicker;
