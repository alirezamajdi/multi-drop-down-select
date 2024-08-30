import Cover from "../../components/cover/Cover";
import * as Yup from "yup";
import { useFormik } from "formik";
import AssessmentForm from "../../components/forms/Assessment-Form";
import Textarea from "../../components/UI/formTags/textarea/Textarea";

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
        <h1 className="text-[22px] font-medium">پیوست ۱</h1>
        <h2>بیمار تحت آمپوتاسیون</h2>
      </div>
      <AssessmentForm formik={formik}>
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
            label="۹ - شرایط زخم اندام آمپوته شده را توضیح می دهد."
            className="col-span-6"
            detail="در صورت وجود مورد غیر طبیعی چه اقدامی انجام داده است؟"
          />
          <Textarea
            label="۱۰ - پوزیشن های مناسب بعد از آمپوتاسیون را می داند."
            className="col-span-3"
          />
          <Textarea
            label="۱۱ - زمان و نحوه تعویض پانسمان استامپ را بر اساس دستور جراح می داند. "
            className="col-span-3"
          />
          <Textarea
            label="۱۲ - زمان مراجعه بعدی/ویزیت دوره ای به درمانگاه/مطب پزشک مربوطه را می داند."
            className="col-span-6"
            detail=" در صورت خیر، چه اقدامی جهت یاد آوری انجام داده است؟"
          />
          <Textarea
            label="۱۳ -اقدامات لازم در صورت بروز علایم خطر را بیان می کند."
            className="col-span-6"
            detail=" (حداقل 5 مورد را نام ببرد.)"
          />
          <Textarea
            label="۱۴ - در مقایسه با زمان ترخیص بهتر شده است. "
            className="col-span-6"
            detail="(حداقل 3 علامت بهبودی را نام ببرد.("
          />
          <Textarea
            label="۱۵ - از زمان ترخيص تا کنون در رابطه با بیماری به اورژانس مراجعه کرده است."
            className="col-span-6"
            detail="در صورت بلی، چند بار مراجعه داشته است؟..............    علت مراجعه.................................."
          />
          <Textarea
            label="۱۶ - از زمان ترخیص برای بیمار مشکل جدیدی پیش آمده است."
            className="col-span-6"
            detail="در صورت بلی، چه مشکلی؟........"
          />
          <Textarea
            label="۱۷ - در مورد مشکل جدید اقدامی انجام داده است."
            className="col-span-3"
            detail="چه اقدامی؟"
          />
          <Textarea
            label="۱۸ - از زمان ترخیص تا کنون در رابطه با مشکل فعلی در بیمارستان بستری شده است.  "
            className="col-span-3"
          />
          <Textarea
            label="۱۹ -بیمار علاقه/ رضایت دارد که پیگیری تلفنی ادامه داشته باشد."
            className="col-span-6"
            detail="در صورت خیر، دلایل ذکر شود...................."
          />
          <Textarea
            label="۲۰ - بیمار دستورات/ پیشنهادهای قبلی مشاوره تلفنی را اجرا کرده است."
            className="col-span-3"
          />
          <Textarea
            label="۲۱ - بیمار نسبت به تصویر ذهنی از خود آگاهی دارد و با شرایط موجود کنار امده است. "
            className="col-span-3"
          />
        </div>
      </AssessmentForm>
    </Cover>
  );
};

export default AddAssessment1;
