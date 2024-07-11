import { Input, FormLabel, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import Box from "../../components/box/Box";
import DatePicker from "../../components/UI/datePicker/DatePicker";
import Select from "../../components/UI/select/Select";

const AddAssessment1 = () => {
  return (
    <Box>
      <div>
        <form className=" grid grid-cols-6 gap-x-6 gap-y-9">
          <div className="col-span-2">
            <FormLabel>نام و نام خانوادگی</FormLabel>
            <Input background={"white"} />
          </div>
          <div className="col-span-2">
            <FormLabel>نام پدر</FormLabel>
            <Input background={"white"} />
          </div>
          <div className="col-span-2">
            <FormLabel>سن (سال)</FormLabel>
            <Input background={"white"} type="number"  dir="ltr"/>
          </div>
          <div className="col-span-2">
            <FormLabel>تاریخ ترخیص</FormLabel>
            <DatePicker />
          </div>
          <div className="col-span-2">
            <FormLabel>کد ملی</FormLabel>
            <Input background={"white"} type="number" dir="ltr" maxLength={10} maxBlockSize={10} max={10}/>
          </div>
          <div className="col-span-2">
            <FormLabel>فرد مصاحبه شونده</FormLabel>
            <Input background={"white"} />
          </div>
          <div className="col-span-2">
            <FormLabel>شماره تماس بیمار</FormLabel>
            <InputGroup>
              <Input type="tel" background={"white"} />
              <InputLeftAddon>98+</InputLeftAddon>
            </InputGroup>
          </div>
          <div className="col-span-2">
            <FormLabel>شماره تماس همراه بیمار</FormLabel>
            <InputGroup>
              <Input type="tel" background={"white"} />
              <InputLeftAddon>98+</InputLeftAddon>
            </InputGroup>
          </div>
          <div className="col-span-2">
            <FormLabel> وضعیت تاهل</FormLabel>
            <Input background={"white"} />
          </div>
          <div className="col-span-2">
            <FormLabel> شغل</FormLabel>
            <Input background={"white"} />
          </div>
          <div className="col-span-2">
            <FormLabel> تحصیلات</FormLabel>
            <Input background={"white"} />
          </div>
          <div className="col-span-2">
            <FormLabel>نوع بیمه</FormLabel>
            <Input background={"white"} />
          </div>
          <div className="col-span-2">
            <FormLabel>محل سکونت </FormLabel>
            <Select />
          </div>
        </form>
      </div>
    </Box>
  );
};

export default AddAssessment1;
