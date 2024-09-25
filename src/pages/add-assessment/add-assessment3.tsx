import Cover from "../../components/cover/Cover";
import * as Yup from "yup";
import { useFormik } from "formik";
import AssessmentForm from "../../components/forms/Assessment-Form";
import Textarea from "../../components/UI/formTags/textarea/Textarea";

const AddAssessment3 = () => {
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
        <h1 className="text-[22px] font-medium">پیوست ۳</h1>
        <h2>بیمار مبتلا به بیماری مزمن انسدادی ریوی (COPD)</h2>
      </div>
      <AssessmentForm formik={formik}>
        {" "}
        <div className="cover-head">
          ز - بررسی وضعیت عمومی و خود مراقبتی بیمار (این قسمت در هر بار پیگیری
          تلفنی پرسیده شود)
        </div>
        <div className="grid grid-cols-6 gap-x-6 gap-y-9 p-6">
          <Textarea
            formik={formik}
            label="۱ - علایم و نشانه های مربوط به بیماری را نام می برد."
            className="col-span-3"
            detail="( حداقل 3 علامت را نام ببرد.)"
            name="a3-q1"
          />
          <Textarea
            formik={formik}
            label="۲ - داروهای مورد استفاده خود را نام می برد."
            className="col-span-3"
            detail="(نام داروها را بگوید)"
            name="a3-q2"
          />
          <Textarea
            formik={formik}
            label="۳ - علایم خطر مرتبط با بیماری، درمان ها یا داروها را نام می برد. "
            className="col-span-6"
            detail="(حداقل 3 علامت خطر را نام ببرد.)"
            name="a3-q3"
          />
          <Textarea
            formik={formik}
            label="۴ - زمان و میزان مصرف داروها را به درستی بیان می کند."
            className="col-span-6"
            detail="(در صورت پاسخ خیر، توصیه به استفاده صحیح و طبق دستور پزشک و استفاده از جعبه قرص شود.)"
            name="a3-q4"
          />
          <Textarea
            formik={formik}
            label="۵ - رژیم غذایی مناسب خود را می داند."
            className="col-span-6"
            detail="در صورت خیر، در خصوص مشاوره تغذیه چه اقدامی انجام داده است؟"
            name="a3-q5"
          />
          <Textarea
            formik={formik}
            label="۶ - ورزش و فعالیت فیزیکی مناسب خود را می داند."
            className="col-span-6"
            detail="در صورت خیر، در این خصوص (مشاوره و....) چه اقدامی انجام داده است؟"
            name="a3-q6"
          />
          <Textarea
            formik={formik}
            label="۷ - راهکارهای پیشگیری و مدیریت درد را می داند (در صورت وجود درد)."
            className="col-span-6"
            detail="در صورت خیر، در این خصوص (مشاوره و....) چه اقدامی انجام داده است؟"
            name="a3-q7"
          />
          <Textarea
            formik={formik}
            label="۸ - راهکارهای پیشگیری و مدیریت علایم مندرج در بخش 'ه' را می داند."
            className="col-span-6"
            detail="در صورت خیر، در این خصوص (مشاوره و....) چه اقدامی انجام داده است؟"
            name="a3-q8"
          />
          <Textarea
            formik={formik}
            label="۹ - زمان مراجعه بعدی/ویزیت دوره ای به درمانگاه/مطب پزشک مربوطه را می داند."
            className="col-span-6"
            detail="در صورت خیر، چه اقدامی جهت یاد آوری انجام داده است؟"
            name="a3-q9"
          />
          <Textarea
            formik={formik}
            label="۱۰ -اقدامات لازم در صورت بروز علایم خطر را بیان می کند."
            className="col-span-6"
            detail="(حداقل 5 مورد را نام ببرد.)"
            name="a3-q10"
          />
          <Textarea
            formik={formik}
            label="۱۱ - نحوه استفاده از ماسک و تنظیم دستگاه را در صورت ضرورت می داند."
            className="col-span-6"
            name="a3-q11"
          />
          <Textarea
            formik={formik}
            label="۱۲ - اصول ایمنی هنگام استفاده از اکسیژن را می داند. "
            className="col-span-6"
            name="a3-q12"
          />
          <Textarea
            formik={formik}
            label="۱۳ - بیمار از خدمات بازتوانی ریه تحت نظر فیزیوتراپ استفاده می کند."
            className="col-span-6"
            name="a3-q13"
          />
          <Textarea
            formik={formik}
            label="۱۴ - بیمار از دستگاه تهویه غیر تهاجمی استفاده می کند."
            className="col-span-6"
            detail="نوع دستگاه تهویه غیر تهاجمی:"
            name="a3-q14"
          />
          <Textarea
            formik={formik}
            label="۱۵- در مقايسه با زمان ترخيص بهتر شده است."
            className="col-span-6"
            detail="(حداقل 3 علامت بهبودی را نام ببرد.)"
            name="a3-q15"
          />
          <Textarea
            formik={formik}
            label="۱۶ - از زمان ترخيص تا کنون در رابطه با بیماری  به اورژانس مراجعه کرده است."
            className="col-span-6"
            detail="در صورت مراجعه به اورژانس بیمارستان، چند بار مراجعه داشته است؟.......................
علت مراجعه به اورژانس بیمارستان؟
"
            name="a3-q16"
          />
          <Textarea
            formik={formik}
            label="۱۷ - از زمان ترخیص برای بیمار مشکل جدیدی پیش آمده است."
            className="col-span-6"
            detail=" در صورت بروز مشکل جدید، چه مشکلی پیش آمده است؟......"
            name="a3-q17"
          />
          <Textarea
            formik={formik}
            label="۱۸ - در مورد مشکل جدید اقدامی انجام داده است."
            className="col-span-6"
            detail="چه اقدامی؟"
            name="a3-q18"
          />
          <Textarea
            formik={formik}
            label="۱۹ - از زمان ترخیص تا کنون در رابطه با مشکل فعلی در بیمارستان بستری شده است."
            className="col-span-6"
            detail=""
            name="a3-q19"
          />
          <Textarea
            formik={formik}
            label="۲۰ - بیمار علاقه/ رضایت دارد که پیگیری تلفنی ادامه داشته باشد."
            className="col-span-6"
            detail="در صورت خیر، دلایل ذکر شود...................."
            name="a3-q20"
          />
          <Textarea
            formik={formik}
            label="۲۱ - بیمار دستورات /پیشنهادهای قبلی مشاوره تلفنی را اجرا کرده است."
            className="col-span-6"
            name="a3-q21"
          />
        </div>
      </AssessmentForm>
    </Cover>
  );
};

export default AddAssessment3;
