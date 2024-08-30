import { ReactNode } from "react";
import Cover from "../cover/Cover";
import DatePicker from "../UI/formTags/datePicker/DatePicker";
import Input from "../UI/formTags/input/Input";
import Select from "../UI/formTags/select/Select";
import Checkbox from "../UI/formTags/checkbox/Checkbox";
import { FC } from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  formik: any;
  children: ReactNode;
}
const UserInfoForm: FC<Props> = ({ formik, children }) => {
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

        <Select
          label="درصورت که بیمار اختلال حرکتی دارد از کدام وسیله استفاده میکند؟"
          className="col-span-3"
        >
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
        <Input
          className="col-span-3"
          label="از هر چند روز یکبار مایل به پیگیری هستین؟"
          dir="ltr"
          type="number"
        />
      </div>
      {children}
      <div className="cover-head">ح - ارزیابی</div>
      <div className="p-5">
        <Select
          label="نیاز به آموزش مجدد در کدام حیطه دارد؟"
          name="home"
          className="w-1/3"
          formik={formik}
        >
          <option value="option1">دارو</option>
          <option value="option2">فعالیت</option>
          <option value="option3">علائم هشدار دهنده</option>
          <option value="option3">خودمراقبتی</option>
        </Select>
      </div>
      <div className="cover-head">نکات مورد توجه</div>
      <div className="p-5">
        <ul className="border rounded-md p-5 flex flex-col  gap-3">
          <li>
            <p>
              - ضروری است قبل از تکمیل پرسشنامه، از بیمار بخواهید تمام داروهایی
              را که استفاده می کند اعم از داروهایی که در زمان ترخیص تجویز شده و
              داروهایی که خودش بدون نسخه تهیه کرده و می خورد از جمله ویتامین ها
              و داروهای گیاهی، در دسترس او باشد.{" "}
            </p>
          </li>
          <li>
            {" "}
            <p>
              - در هر مورد (بررسی وضعیت جسمی/ پرسشنامه) که بیمار اطلاعات و آگاهی
              مورد نیاز را نداشت، بایستی آموزش ها به صورت روان و راحت به او داده
              و سپس بازخورد گرفته شود.
            </p>
          </li>
          <li>
            {" "}
            <p>
              - از بیمار یا مراقب وی بخواهید هر سؤالی که دارد از شما بپرسد و این
              اطمینان را به بدهید که شما بطور کامل پاسخگو هستید.
            </p>
          </li>
          <li>
            {" "}
            <p>
              - شماره تماسی در اختیار بیمار/مراقب وی قرار دهید تا بتواند سؤالات
              خود را در هر زمان از شما بپرسد.
            </p>
          </li>
          <li>
            {" "}
            <p>
              - شروع پیگیری بیمار طی سه روز اول پس از ترخیص و بر اساس تواتر مشخص
              شده، می باشد.
            </p>
          </li>
          <li>
            {" "}
            <p>
              - اگر بیمار هرگونه علایمی که با روش های توصیه شده معمول قابل
              مدیریت نباشد (علایم قلبی تنفسی، اختلال سطح هوشیاری، اختلالات حسی و
              حرکتی، تب و نظایر آن) داشته باشد، لازم است در اسرع وقت به مرکز
              درمانی مراجعه کند.
            </p>
          </li>
        </ul>
      </div>{" "}
      <div className="cover-head">جزيیات تماس</div>
      <div className="grid grid-cols-6 p-6 gap-6">
        <DatePicker label="تاریخ تماس" />
        <Select label="نتیجه تماس" className="!col-span-1" formik={formik}>
          <option value="option1">موفق</option>
          <option value="option2">ناموفق</option>
        </Select>
        <Input className="col-span-3" label="علت عدم پاسخ" />
        <Input label="ساعت شروع مکالمه" type="time" />

        <Input label="ساعت پایان مکالمه" type="time" />

        <Input label="نام پرستار پیگیری" />
      </div>
      <div className="cover-head">تاریخ تماس بعدی</div>
      <div className="p-6">
        <div className="w-1/3">
          <DatePicker label="تاریخ تماس بعدی با بیمار را انتخاب کنید" />
        </div>
      </div>
      <div className="p-6">
        <Button
          colorScheme="blue"
          onClick={() => formik.handleSubmit()}
          size="md"
        >
          ذخیره
        </Button>
      </div>
    </Cover>
  );
};

export default UserInfoForm;
