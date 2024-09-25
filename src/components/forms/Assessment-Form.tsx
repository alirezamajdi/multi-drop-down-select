import { ReactNode } from "react";
import Cover from "../cover/Cover";
import DatePicker from "../UI/formTags/datePicker/DatePicker";
import Input from "../UI/formTags/input/Input";
import Select from "../UI/formTags/select/Select";
import Checkbox from "../UI/formTags/checkbox/Checkbox";
import { FC } from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: any;
  children: ReactNode;
}
const UserInfoForm: FC<Props> = ({ formik, children }) => {
  return (
    <Cover>
      <div className="cover-head">الف - اطلاعات بیمار</div>
      <div className=" grid grid-cols-6 gap-x-6 gap-y-9 p-6">
        <Input formik={formik} name="fullName" label="نام و نام خانوادگی" />

        <Input label="نام پدر" name="fatherName" formik={formik} />
        <Input
          formik={formik}
          name="age"
          label="سن (سال)"
          type="number"
          dir="ltr"
        />

        <DatePicker formik={formik} name="dischargeDate" label="تاریخ ترخیص" />

        <Input
          formik={formik}
          label="کد ملی"
          type="number"
          name="nationalCode"
          dir="ltr"
        />
        <Input formik={formik} label="فرد مصاحبه شونده" name="interviewee" />

        <Input
          label="شماره تماس همراه بیمار"
          type="tel"
          name="accompanyingMobile"
          leftAddon="98+"
          formik={formik}
        />

        <Input
          label="شماره تماس بیمار"
          type="tel"
          name="mobile"
          leftAddon="98+"
          formik={formik}
        />

        <Input label="وضعیت تاهل" name="maritalStatus" formik={formik} />

        <Input formik={formik} label="شغل" name="job" />
        <Input formik={formik} label="تحصیلات" name="education" />
        <Input formik={formik} label="نوع بیمه" name="insuranceType" />

        <Select label="محل سکونت" name="residence" formik={formik}>
          <option value="منزل شخصی">منزل شخصی</option>
          <option value="مراکز نگهداری">مراکز نگهداری</option>
          <option value="منزل فرزندان">منزل فرزندان</option>
        </Select>
      </div>
      <div className="cover-head">ب - اطلاعات بالینی</div>
      <div className=" grid grid-cols-6 gap-x-6 gap-y-9 p-6">
        <Input formik={formik} label="تشخیص بیماری" name="diseaseDiagnosis" />

        <DatePicker
          formik={formik}
          label="تاریخ بستری"
          name="hospitalizationDate"
        />

        <Input
          label="تعداد روز های بستری در بیمارستان"
          type="number"
          dir="ltr"
          name="numberOfDaysInHospital"
          formik={formik}
        />

        <Select formik={formik} label="حساسیت" name="hasSensitivity">
          <option value="دارد">دارد</option>
          <option value="ندارد">ندارد</option>
        </Select>

        <Input formik={formik} label="حساسیت به دارو" name="drugSensitivity" />
        <Input
          formik={formik}
          label="حساسیت به مواد غذایی"
          name="foodSensitivity"
        />
        <Input
          formik={formik}
          label="حساسیت به عوامل محیطی"
          name="environmentalSensitivity"
        />
      </div>
      <div className="cover-head">ج - بررسی وضعیت جسمی بیمار</div>
      <div className=" grid grid-cols-6 gap-x-6 gap-y-9 p-6">
        <Select
          label="اختلال حرکتی"
          className="col-span-3"
          name="hasMovementDisorder"
          formik={formik}
        >
          <option value="دارد">دارد</option>
          <option value="ندارد">ندارد</option>
        </Select>

        <Select
          label="درصورت که بیمار اختلال حرکتی دارد از کدام وسیله استفاده میکند؟"
          className="col-span-3"
          name="deviceMovementDisorder"
          formik={formik}
        >
          <option value="واکر">واکر</option>
          <option value="عصا">عصا</option>
          <option value="ویلچر">ویلچر</option>
        </Select>
        <Input
          formik={formik}
          className="col-span-4"
          label="درد دارد یا ندارد در صورت پاسخ مثبت، میزان درد بر اساس خط کش درد چه عددی است؟"
          name="hasPain"
        />
        <Select
          formik={formik}
          className="col-span-1"
          label="بیماری مزمن"
          name="hasChronicDisease"
        >
          <option value="دارد">دارد</option>
          <option value="ندارد">ندارد</option>
        </Select>
        <Input
          formik={formik}
          className="col-span-2"
          label="در صورت بلی، کدام بیماری؟"
          name="chronicDiseaseName"
        />
        <Select
          formik={formik}
          className="col-span-3"
          label="در مورد این بیماری کدام اقدام/اقدام هایی را انجام داده است؟"
          name="actionsChronicDisease"
        >
          <option value="تحت نظر پزشک است و دارو مصرف نمی کند.">
            تحت نظر پزشک است و دارو مصرف نمی کند.
          </option>
          <option value="داروهای تجویز شده پزشک را مصرف می کند">
            داروهای تجویز شده پزشک را مصرف می کند.
          </option>
          <option value="از روش های طب مکمل و سنتی استفاده می کند">
            از روش های طب مکمل و سنتی استفاده می کند.
          </option>
          <option value="خود درمانی انجام می دهد">
            خود درمانی انجام می دهد.
          </option>
          <option value="اقدامی انجام نداده است.">
            اقدامی انجام نداده است.
          </option>
        </Select>
        <Select
          formik={formik}
          label="زخم بستر"
          className="col-span-1"
          name="hasBedsores"
        >
          <option value="دارد">دارد</option>
          <option value="ندارد">ندارد</option>
        </Select>
      </div>
      <div className="cover-head">
        ه - علایم و نشانه های در زمان تکمیل پرسشنامه
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-9 p-6">
        <Checkbox label="تنگی نفس" formik={formik} name="testbb" />
        <Checkbox formik={formik} label="ضعف" />
        <Checkbox formik={formik} label="خستگی" />
        <Checkbox formik={formik} label="تپش قلب" />
        <Checkbox formik={formik} label="افزایش وزن" />
        <Checkbox formik={formik} label="کاهش وزن" />
        <Checkbox formik={formik} label="بی اشتهایی" />
        <Checkbox formik={formik} label="بی خوابی" />
        <Checkbox formik={formik} label="تورم اندام ها" />
        <Checkbox formik={formik} label="درد" />
        <Checkbox formik={formik} label=" سرفه" />
        <Checkbox formik={formik} label="اسهال" />
        <Checkbox formik={formik} label="یبوست" />
        <Checkbox formik={formik} label="بی اختیاری ادرار" />
        <Checkbox formik={formik} label="بی اختیاری مدفوع" />
        <Checkbox formik={formik} label="تکرر ادرار" />
        <Checkbox formik={formik} label="پر ادراری" />
        <Checkbox formik={formik} label="آنوری" />
        <Checkbox formik={formik} label="تب " />
        <Checkbox formik={formik} label="مشکلات پوستی " />
        <Checkbox formik={formik} label="تهوع و استفراغ" />
        <Checkbox formik={formik} label="عفونت" />
      </div>
      <div className="cover-head">و - تواتر پیگیری</div>
      <div className=" grid grid-cols-12 gap-x-6 gap-y-9 p-6">
        <Input
          className="col-span-3"
          label="از هر چند روز یکبار مایل به پیگیری هستین؟"
          dir="ltr"
          type="number"
          name="followUpFrequency"
          formik={formik}
        />
      </div>
      {children}
      <div className="cover-head">ح - ارزیابی</div>
      <div className="p-5">
        <Select
          label="نیاز به آموزش مجدد در کدام حیطه دارد؟"
          name="needTraining"
          className="w-1/3"
          formik={formik}
        >
          <option value="دارو">دارو</option>
          <option value="فعالیت">فعالیت</option>
          <option value="علائم هشدار دهنده">علائم هشدار دهنده</option>
          <option value="خودمراقبتی">خودمراقبتی</option>
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
        <DatePicker label="تاریخ تماس" name="callDate" formik={formik} />
        <Select
          label="نتیجه تماس"
          className="!col-span-1"
          formik={formik}
          name="resultCall"
        >
          <option value="موفق">موفق</option>
          <option value="ناموفق">ناموفق</option>
        </Select>
        <Input
          className="col-span-3"
          label="علت عدم پاسخ"
          formik={formik}
          name="nonResponseReason"
        />
        <Input
          label="ساعت شروع مکالمه"
          type="time"
          formik={formik}
          name="startTime"
        />

        <Input
          label="ساعت پایان مکالمه"
          type="time"
          formik={formik}
          name="endTime"
        />

        <Input label="نام پرستار پیگیری" name="nurseName" formik={formik} />
      </div>
      <div className="cover-head">تاریخ تماس بعدی</div>
      <div className="p-6">
        <div className="w-1/3">
          <DatePicker
            label="تاریخ تماس بعدی با بیمار را انتخاب کنید"
            formik={formik}
            name="nextCallDate"
          />
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
