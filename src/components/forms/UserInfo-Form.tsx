import Cover from "../../components/cover/Cover";
import DatePicker from "../../components/UI/formTags/datePicker/DatePicker";
import Input from "../../components/UI/formTags/input/Input";
import Select from "../../components/UI/formTags/select/Select";
import Checkbox from "../../components/UI/formTags/checkbox/Checkbox";
import { FC } from "react";

interface Props {
  formik: any;
}
const UserInfoForm: FC<Props> = ({ formik }) => {
  return (
    <Cover>
      <div className="cover-head">الف - اطلاعات بیمار</div>
      <div className=" grid grid-cols-6 gap-x-6 gap-y-9 p-6">
        <Input formik={formik} name="fullName" label="نام و نام خانوادگی" />

        <Input label="نام پدر" />
        <Input
          formik={formik}
          name="age"
          label="سن (سال)"
          type="number"
          dir="ltr"
        />

        <DatePicker formik={formik} name="date" label="تاریخ ترخیص" />

        <Input label="کد ملی" type="number" dir="ltr" />
        <Input label="فرد مصاحبه شونده" />

        <Input label="شماره تماس همراه بیمار" type="tel" leftAddon="98+" />

        <Input label="شماره تماس بیمار" type="tel" leftAddon="98+" />

        <Input label="وضعیت تاهل" />

        <Input label="شغل" />
        <Input label="تحصیلات" />
        <Input label="نوع بیمه" />

        <Select label="محل سکونت" name="home" formik={formik}>
          <option value="option1">منزل شخصی</option>
          <option value="option2">مراکز نگهداری</option>
          <option value="option3">منزل فرزندان</option>
        </Select>
      </div>
      <div className="cover-head">ب - اطلاعات بالینی</div>
      <div className=" grid grid-cols-6 gap-x-6 gap-y-9 p-6">
        <Input label="تشخیص" />

        <DatePicker label="تاریخ بستری" />

        <Input
          label="تعداد روز های بستری در بیمارستان"
          type="number"
          dir="ltr"
        />

        <Select label="حساسیت">
          <option value="option1">دارد</option>
          <option value="option2">ندارد</option>
        </Select>

        <Input label="حساسیت به دارو" />
        <Input label="حساسیت به مواد غذایی" />
        <Input label="حساسیت به عوامل محیطی" />
      </div>
      <div className="cover-head">ج - بررسی وضعیت جسمی بیمار</div>

      <div className=" grid grid-cols-6 gap-x-6 gap-y-9 p-6">
        <Select label="اختلال حرکتی" className="col-span-3">
          <option value="option1">دارد</option>
          <option value="option2">ندارد</option>
        </Select>

        <Select label="درصورت که بیمار اختلال حرکتی دارد از کدام وسیله استفاده میکند؟"  className="col-span-3">
          <option value="option1">واکر</option>
          <option value="option2">عصا</option>
          <option value="option2">ویلچر</option>
        </Select>
        <Input
          className="col-span-4"
          label="درد دارد یا ندارد در صورت پاسخ مثبت، میزان درد بر اساس خط کش درد چه عددی است؟"
        />
        <Select className="col-span-1" label="بیماری مزمن">
          <option value="option1">دارد</option>
          <option value="option2">ندارد</option>
        </Select>
        <Input className="col-span-2" label="در صورت بلی، کدام بیماری؟" />
        <Select
          className="col-span-3"
          label="در مورد این بیماری کدام اقدام/اقدام هایی را انجام داده است؟"
        >
          <option value="option1">تحت نظر پزشک است و دارو مصرف نمی کند.</option>
          <option value="option2">
            داروهای تجویز شده پزشک را مصرف می کند.
          </option>
          <option value="option2">
            از روش های طب مکمل و سنتی استفاده می کند.
          </option>
          <option value="option2">خود درمانی انجام می دهد.</option>
          <option value="option2">اقدامی انجام نداده است.</option>
        </Select>
        <Select label="زخم بستر" className="col-span-1">
          <option value="option1">دارد</option>
          <option value="option2">ندارد</option>
        </Select>
      </div>
      <div className="cover-head">
        ه - علایم و نشانه های در زمان تکمیل پرسشنامه
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-9 p-6">
        <Checkbox label="تنگی نفس" formik={formik} name="testbb" />
        <Checkbox label="ضعف" />
        <Checkbox label="خستگی" />
        <Checkbox label="تپش قلب" />
        <Checkbox label="افزایش وزن" />
        <Checkbox label="کاهش وزن" />
        <Checkbox label="بی اشتهایی" />
        <Checkbox label="بی خوابی" />
        <Checkbox label="تورم اندام ها" />
        <Checkbox label="درد" />
        <Checkbox label=" سرفه" />
        <Checkbox label="اسهال" />
        <Checkbox label="یبوست" />
        <Checkbox label="بی اختیاری ادرار" />
        <Checkbox label="بی اختیاری مدفوع" />
        <Checkbox label="تکرر ادرار" />
        <Checkbox label="پر ادراری" />
        <Checkbox label="آنوری" />
        <Checkbox label="تب " />
        <Checkbox label="مشکلات پوستی " />
        <Checkbox label="تهوع و استفراغ" />
        <Checkbox label="عفونت" />
      </div>
      <div className="cover-head">و - تواتر پیگیری</div>
      <div className=" grid grid-cols-12 gap-x-6 gap-y-9 p-6">
        <Input className="col-span-3" label="از هر چند روز یکبار مایل به پیگیری هستین؟" dir="ltr" type="number" />
      </div>

    </Cover>
  );
};

export default UserInfoForm;
