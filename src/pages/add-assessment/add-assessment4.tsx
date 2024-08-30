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
            label="۱۰ - اقدامات لازم در صورت بروز علایم خطر را بیان می کند."
            className="col-span-6"
            detail="(حداقل ۵ مورد را نام ببرد.)"
          />
          <Textarea
            label="۱۱ - بیمار از خدمات توانبخشی و بازتوانی استفاده می کند؟"
            className="col-span-6"
          />

          <Select
            label="۱۲ - در صورت استفاده از خدمات توانبخشی و بازتوانی از چه نوع خدماتی استفاده می کند؟"
            name="home"
            formik={formik}
            className="col-span-3"
          >
            <option value="option1">فیزیوتراپی</option>
            <option value="option2">گفتار درمانی</option>
            <option value="option3">کاردرمانی</option>
            <option value="option3">ورزش</option>
            <option value="option3">سایر موارد</option>
          </Select>

          <Textarea
            label="۱۳ - بیمار در مقایسه با زمان ترخیص بهتر شده است."
            className="col-span-6"
            detail="(حداقل ۳ علامت بهبودی را نام ببرد)"
          />
          <Textarea
            label="۱۴ - از زمان ترخيص تا کنون در رابطه با بیماری به اورژانس مراجعه کرده است."
            className="col-span-6"
            detail="در صورت مراجعه به اورژانس چند بار مراجعه کرده است؟.........................
علت مراجعه به اورژانس بیمارستان"
          />
          <Textarea label="۱۵ - از زمان ترخیص برای بیمار مشکل جدیدی پیش آمده است." className="col-span-6" detail="در صورت بلی، چه مشکلی؟........" />
          <Textarea label="۱۶ - در مورد مشکل جدید اقدامی انجام داده است؟" className="col-span-6" detail="چه اقدامی؟" />
          <Textarea label="۱۷ - از زمان ترخیص تا کنون در رابطه با مشکل فعلی در بیمارستان بستری شده است." className="col-span-6"  />
          <Textarea label="۱۸ - بیمار علاقه/ رضایت دارد که پیگیری تلفنی ادامه داشته باشد." className="col-span-6" detail="در صورت خیر، دلایل ذکر شود...................." />
          <Textarea label="۱۹ - بیمار دستورات /پیشنهادهای قبلی مشاوره تلفنی را اجرا کرده است." className="col-span-6" />

        </div>
      </AssessmentForm>
    </Cover>
  );
};

export default AddAssessment1;
