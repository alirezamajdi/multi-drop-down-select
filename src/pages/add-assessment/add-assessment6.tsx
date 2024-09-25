import Cover from "../../components/cover/Cover";
import * as Yup from "yup";
import { useFormik } from "formik";
import AssessmentForm from "../../components/forms/Assessment-Form";
import Textarea from "../../components/UI/formTags/textarea/Textarea";
import RadioCM from "../../components/UI/formTags/radio/Radio";

const AddAssessment1 = () => {
  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object({}),
    onSubmit: async (values: Record<string, string>) => {
      console.log("ccc", values);
    },
  });

  return (
    <Cover>
      <div className="p-6 text-center">
        <h1 className="text-[22px] font-medium">پیوست ۶</h1>
        <h2>بیمار مبتلا به نارسایی احتقانی قلبی (CHF)</h2>
      </div>
      <AssessmentForm formik={formik}>
        <div className="cover-head">
          ز - بررسی وضعیت عمومی و خود مراقبتی بیمار (این قسمت در هر بار پیگیری
          تلفنی پرسیده شود)
        </div>
        <div className="grid grid-cols-6 gap-x-6 gap-y-9 p-6">
          <Textarea
            formik={formik}
            name="a6-q1"
            label="۱ - علایم و نشانه های مربوط به بیماری را نام می برد."
            className="col-span-3"
            detail="( حداقل 3 علامت را نام ببرد.)"
          />
          <Textarea
            formik={formik}
            label="۲ - داروهای مورد استفاده خود را نام می برد."
            className="col-span-3"
            detail="(نام داروها را بگوید)"
            name="a6-q2"
          />
          <Textarea
            formik={formik}
            label="۳ - علایم خطر مرتبط با بیماری، درمان ها یا داروها را نام می برد. "
            className="col-span-6"
            detail="(حداقل 3 علامت خطر را نام ببرد.)"
            name="a6-q3"
          />
          <Textarea
            formik={formik}
            label="۴ - زمان و میزان مصرف داروها را به درستی بیان می کند."
            className="col-span-6"
            detail="(در صورت پاسخ خیر، توصیه به استفاده صحیح و طبق دستور پزشک و استفاده از جعبه قرص شود.)"
            name="a6-q4"
          />
          <Textarea
            formik={formik}
            label="۵ - رژیم غذایی مناسب خود را می داند."
            className="col-span-6"
            detail="در صورت خیر، در خصوص مشاوره تغذیه چه اقدامی انجام داده است؟"
            name="a6-q5"
          />
          <Textarea
            formik={formik}
            label="۶ - ورزش و فعالیت فیزیکی مناسب خود را می داند."
            className="col-span-6"
            detail="در صورت خیر، در این خصوص (مشاوره و....) چه اقدامی انجام داده است؟"
            name="a6-q6"
          />
          <Textarea
            formik={formik}
            label="۷ - راهکارهای پیشگیری و مدیریت درد را می داند (در صورت وجود درد)."
            className="col-span-6"
            detail="در صورت خیر، در این خصوص (مشاوره و....) چه اقدامی انجام داده است؟"
            name="a6-q7"
          />
          <Textarea
            formik={formik}
            label="۸ - راهکارهای پیشگیری و مدیریت علایم مندرج در بخش 'ه' را می داند."
            className="col-span-6"
            detail="در صورت خیر، در این خصوص (مشاوره و....) چه اقدامی انجام داده است؟"
            name="a6-q8"
          />

          <RadioCM
            label="۹ - اقدامات لازم در زمانی که روی پا یا مچ پایش ورم می کند، یا وقتی که با صدای نفسش ناگهان از خواب می پرد یا هنگامی که شب ها بیشتر از قبل برای ادرار کردن بیدار می شود، را می داند (به بیمار بگویید در هر یک از شرایط فوق باید با پزشک خود تماس بگیرد)."
            className="col-span-6 !px-0"
            name="a6-q9"
          />
          <RadioCM
            label="۱۰ -  نحوه توزین صحیح و ثبت آن را می داند. "
            className="col-span-6 !px-0"
            name="a6-q10"
          />
          <RadioCM
            label="۱۱ - مقدار مایعات مجاز روزانه را می داند (به بیمار بگویید که باید کمتر از 2 لیتر در روز مایعات میل کند تا میزان ورم بدنش کم و تنفسش راحت تر شود)."
            className="col-span-6 !px-0"
            name="a6-q11"
          />
          <RadioCM
            label="۱۲ - نحوه استفاده از ماسک اکسیژن و تنظیم دستگاه را در صورت ضرورت می داند."
            className="col-span-6 !px-0"
            name="a6-q12"
          />

          <Textarea
            formik={formik}
            label="۱۳ - زمان مراجعه بعدی/ویزیت دوره ای به درمانگاه/مطب پزشک مربوطه را می داند."
            className="col-span-6"
            detail="در صورت خیر، چه اقدامی جهت یادآوری انجام داده است."
            name="a6-q13"
          />
          <Textarea
            formik={formik}
            label="۱۴ - اقدامات لازم در صورت بروز علایم خطر را بیان می کند."
            className="col-span-6"
            detail="(حداقل 5 مورد را نام ببرد.)"
            name="a6-q14"
          />
          <Textarea
            formik={formik}
            label="۱۵ - در مقايسه با زمان ترخيص بهتر شده است."
            className="col-span-6"
            detail="(حداقل 3 علامت بهبودی را نام ببرد)"
            name="a6-q15"
          />
          <Textarea
            formik={formik}
            label="۱۶ - از زمان ترخيص تا کنون در رابطه با بیماری به اورژانس مراجعه کرده است."
            className="col-span-6"
            detail="در صورت بلی، چند بار مراجعه داشته است؟..............
علت مراجعه.......................................................:."
            name="a6-q16"
          />

          <Textarea
            formik={formik}
            label="۱۷ - از زمان ترخیص برای بیمار مشکل جدیدی پیش آمده است."
            className="col-span-6"
            detail="در صورت بلی، چه مشکلی؟........"
            name="a6-q17"
          />
          <Textarea
            formik={formik}
            label="۱۸ - در مورد مشکل جدید اقدامی انجام داده است."
            className="col-span-6"
            detail="چه اقدامی؟ "
            name="a6-q18"
          />

          <Textarea
            formik={formik}
            label="۱۹ - بیمار علاقه/ رضایت دارد که پیگیری تلفنی ادامه داشته باشد."
            className="col-span-6"
            detail="در صورت خیر، دلایل ذکر شود...................."
          />
          <RadioCM
            formik={formik}
            label="۲۰ - از زمان ترخیص تا کنون در رابطه با مشکل فعلی در بیمارستان بستری شده است."
            className="col-span-3 !px-0"
            name="a6-q20"
          />
          <RadioCM
            formik={formik}
            label="۲۱ - بیمار دستورات /پیشنهادهای قبلی مشاوره تلفنی را اجرا کرده است."
            className="col-span-3 !px-0"
            name="a6-q21"
          />
        </div>
      </AssessmentForm>
    </Cover>
  );
};

export default AddAssessment1;
