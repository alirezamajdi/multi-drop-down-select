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
            name="fullName"
            label="۱ - علایم و نشانه های مربوط به بیماری را نام می برد."
            className="col-span-3"
            detail="( حداقل 3 علامت را نام ببرد.)"
          />
          <Textarea
            label="۲ - داروهای مورد استفاده خود را نام می برد."
            className="col-span-3"
            detail="(نام داروها را بگوید)"
          />
          <Textarea
            label="۳ - علایم خطر مرتبط با بیماری، درمان ها یا داروها را نام می برد. "
            className="col-span-6"
            detail="(حداقل 3 علامت خطر را نام ببرد.)"
          />
          <Textarea
            label="۴ - زمان و میزان مصرف داروها را به درستی بیان می کند."
            className="col-span-6"
            detail="(در صورت پاسخ خیر، توصیه به استفاده صحیح و طبق دستور پزشک و استفاده از جعبه قرص شود.)"
          />
          <Textarea
            label="۵ - رژیم غذایی مناسب خود را می داند."
            className="col-span-6"
            detail="در صورت خیر، در خصوص مشاوره تغذیه چه اقدامی انجام داده است؟"
          />
          <Textarea
            label="۶ - ورزش و فعالیت فیزیکی مناسب خود را می داند."
            className="col-span-6"
            detail="در صورت خیر، در این خصوص (مشاوره و....) چه اقدامی انجام داده است؟"
          />
          <Textarea
            label="۷ - راهکارهای پیشگیری و مدیریت درد را می داند (در صورت وجود درد)."
            className="col-span-6"
            detail="در صورت خیر، در این خصوص (مشاوره و....) چه اقدامی انجام داده است؟"
          />
          <Textarea
            label="۸ - راهکارهای پیشگیری و مدیریت علایم مندرج در بخش 'ه' را می داند."
            className="col-span-6"
            detail="در صورت خیر، در این خصوص (مشاوره و....) چه اقدامی انجام داده است؟"
          />
          <Textarea
            label="۹ - زمان مراجعه بعدی/ویزیت دوره ای به درمانگاه/مطب پزشک مربوطه را می داند."
            className="col-span-6"
            detail="در صورت خیر، چه اقدامی جهت یاد آوری انجام داده است؟"
          />
          <Textarea
            label="۱۰ -اقدامات لازم در صورت بروز علایم خطر را بیان می کند."
            className="col-span-6"
            detail="(حداقل 5 مورد را نام ببرد.)"
          />
          <Textarea
            label="۱۱ - نحوه استفاده از ماسک و تنظیم دستگاه را در صورت ضرورت می داند."
            className="col-span-6"
          />
          <Textarea
            label="۱۲ - اصول ایمنی هنگام استفاده از اکسیژن را می داند. "
            className="col-span-6"
          />
          <Textarea
            label="۱۳ - بیمار از خدمات بازتوانی ریه تحت نظر فیزیوتراپ استفاده می کند."
            className="col-span-6"
          />
          <Textarea
            label="۱۴ - بیمار از دستگاه تهویه غیر تهاجمی استفاده می کند."
            className="col-span-6"
            detail="نوع دستگاه تهویه غیر تهاجمی:"
          />
          <Textarea
            label="۱۵- در مقايسه با زمان ترخيص بهتر شده است."
            className="col-span-6"
            detail="(حداقل 3 علامت بهبودی را نام ببرد.)"
          />
          <Textarea
            label="۱۶ - از زمان ترخيص تا کنون در رابطه با بیماری  به اورژانس مراجعه کرده است."
            className="col-span-6"
            detail="در صورت مراجعه به اورژانس بیمارستان، چند بار مراجعه داشته است؟.......................
علت مراجعه به اورژانس بیمارستان؟
"
          />
          <Textarea
            label="۱۷ - از زمان ترخیص برای بیمار مشکل جدیدی پیش آمده است."
            className="col-span-6"
            detail=" در صورت بروز مشکل جدید، چه مشکلی پیش آمده است؟......"
          />
          <Textarea
            label="۱۸ - در مورد مشکل جدید اقدامی انجام داده است."
            className="col-span-6"
            detail="چه اقدامی؟"
          />
          <Textarea
            label="۱۹ - از زمان ترخیص تا کنون در رابطه با مشکل فعلی در بیمارستان بستری شده است."
            className="col-span-6"
            detail=""
          />
          <Textarea
            label="۲۰ - بیمار علاقه/ رضایت دارد که پیگیری تلفنی ادامه داشته باشد."
            className="col-span-6"
            detail="در صورت خیر، دلایل ذکر شود...................."
          />
          <Textarea
            label="۲۱ - بیمار دستورات /پیشنهادهای قبلی مشاوره تلفنی را اجرا کرده است."
            className="col-span-6"
          />
        </div>
      </AssessmentForm>
    </Cover>
  );
};

export default AddAssessment3;
