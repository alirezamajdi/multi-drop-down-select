import Cover from "../../components/cover/Cover";
import * as Yup from "yup";
import { useFormik } from "formik";
import AssessmentForm from "../../components/forms/Assessment-Form";
import Textarea from "../../components/UI/formTags/textarea/Textarea";
import Select from "../../components/UI/formTags/select/Select";

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
        <h1 className="text-[22px] font-medium">پیوست ۴</h1>
        <h2>بیمار دچار سکته مغزی (CVA)</h2>
      </div>
      <AssessmentForm formik={formik}>
        <div className="cover-head">
          ز - بررسی وضعیت عمومی و خود مراقبتی بیمار (این قسمت در هر بار پیگیری
          تلفنی پرسیده شود)
        </div>
        <div className="grid grid-cols-6 gap-x-6 gap-y-9 p-6">
          <Textarea
            formik={formik}
            name="a4-q1"
            label="۱ - علایم و نشانه های مربوط به بیماری را نام می برد."
            className="col-span-3"
            detail="( حداقل 3 علامت را نام ببرد.)"
          />
          <Textarea
            formik={formik}
            label="۲ - داروهای مورد استفاده خود را نام می برد."
            className="col-span-3"
            detail="(نام داروها را بگوید)"
            name="a4-q2"
          />
          <Textarea
            formik={formik}
            label="۳ - علایم خطر مرتبط با بیماری، درمان ها یا داروها را نام می برد. "
            className="col-span-6"
            detail="(حداقل 3 علامت خطر را نام ببرد.)"
            name="a4-q3"
          />
          <Textarea
            formik={formik}
            label="۴ - زمان و میزان مصرف داروها را به درستی بیان می کند."
            className="col-span-6"
            detail="(در صورت پاسخ خیر، توصیه به استفاده صحیح و طبق دستور پزشک و استفاده از جعبه قرص شود.)"
            name="a4-q4"
          />
          <Textarea
            formik={formik}
            label="۵ - رژیم غذایی مناسب خود را می داند."
            className="col-span-6"
            detail="در صورت خیر، در خصوص مشاوره تغذیه چه اقدامی انجام داده است؟"
            name="a4-q5"
          />
          <Textarea
            formik={formik}
            label="۶ - ورزش و فعالیت فیزیکی مناسب خود را می داند."
            className="col-span-6"
            detail="در صورت خیر، در این خصوص (مشاوره و....) چه اقدامی انجام داده است؟"
            name="a4-q6"
          />
          <Textarea
            formik={formik}
            label="۷ - راهکارهای پیشگیری و مدیریت درد را می داند (در صورت وجود درد)."
            className="col-span-6"
            detail="در صورت خیر، در این خصوص (مشاوره و....) چه اقدامی انجام داده است؟"
            name="a4-q7"
          />
          <Textarea
            formik={formik}
            label="۸ - راهکارهای پیشگیری و مدیریت علایم مندرج در بخش 'ه' را می داند."
            className="col-span-6"
            detail="در صورت خیر، در این خصوص (مشاوره و....) چه اقدامی انجام داده است؟"
            name="a4-q8"
          />
          <Textarea
            formik={formik}
            label="۹ - زمان مراجعه بعدی/ویزیت دوره ای به درمانگاه/مطب پزشک مربوطه را می داند."
            className="col-span-6"
            detail="در صورت خیر، چه اقدامی جهت یاد آوری انجام داده است؟"
            name="a4-q9"
          />
          <Textarea
            formik={formik}
            label="۱۰ - اقدامات لازم در صورت بروز علایم خطر را بیان می کند."
            className="col-span-6"
            detail="(حداقل ۵ مورد را نام ببرد.)"
            name="a4-q10"
          />
          <Textarea
            formik={formik}
            label="۱۱ - بیمار از خدمات توانبخشی و بازتوانی استفاده می کند؟"
            className="col-span-6"
            name="a4-q11"
          />

          <Select
            label="۱۲ - در صورت استفاده از خدمات توانبخشی و بازتوانی از چه نوع خدماتی استفاده می کند؟"
            formik={formik}
            className="col-span-3"
            name="a4-q12"
          >
            <option value="فیزیوتراپی">فیزیوتراپی</option>
            <option value="گفتار درمانی">گفتار درمانی</option>
            <option value="کاردرمانی">کاردرمانی</option>
            <option value="ورزش">ورزش</option>
            <option value="سایر موارد">سایر موارد</option>
          </Select>

          <Textarea
            formik={formik}
            label="۱۳ - بیمار در مقایسه با زمان ترخیص بهتر شده است."
            className="col-span-6"
            detail="(حداقل ۳ علامت بهبودی را نام ببرد)"
            name="a4-q13"
          />
          <Textarea
            formik={formik}
            label="۱۴ - از زمان ترخيص تا کنون در رابطه با بیماری به اورژانس مراجعه کرده است."
            className="col-span-6"
            detail="در صورت مراجعه به اورژانس چند بار مراجعه کرده است؟.........................
علت مراجعه به اورژانس بیمارستان"
            name="a4-q14"
          />
          <Textarea
            formik={formik}
            label="۱۵ - از زمان ترخیص برای بیمار مشکل جدیدی پیش آمده است."
            className="col-span-6"
            detail="در صورت بلی، چه مشکلی؟........"
            name="a4-q15"
          />
          <Textarea
            formik={formik}
            label="۱۶ - در مورد مشکل جدید اقدامی انجام داده است؟"
            className="col-span-6"
            detail="چه اقدامی؟"
            name="a4-q16"
          />
          <Textarea
            formik={formik}
            label="۱۷ - از زمان ترخیص تا کنون در رابطه با مشکل فعلی در بیمارستان بستری شده است."
            className="col-span-6"
            name="a4-q17"
          />
          <Textarea
            formik={formik}
            label="۱۸ - بیمار علاقه/ رضایت دارد که پیگیری تلفنی ادامه داشته باشد."
            className="col-span-6"
            detail="در صورت خیر، دلایل ذکر شود...................."
            name="a4-q18"
          />
          <Textarea
            formik={formik}
            label="۱۹ - بیمار دستورات /پیشنهادهای قبلی مشاوره تلفنی را اجرا کرده است."
            className="col-span-6"
            name="a4-q19"
          />
        </div>
      </AssessmentForm>
    </Cover>
  );
};

export default AddAssessment1;
