import Cover from "../../components/cover/Cover";
import * as Yup from "yup";
import { useFormik } from "formik";
import AssessmentForm from "../../components/forms/Assessment-Form";
import Textarea from "../../components/UI/formTags/textarea/Textarea";
import DatePicker from "../../components/UI/formTags/datePicker/DatePicker";
import RadioCM from "../../components/UI/formTags/radio/Radio";
import { Radio } from "@chakra-ui/react";

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
        <h1 className="text-[22px] font-medium">پیوست ۵</h1>
        <h2>بیمار مبتلا به دیابت </h2>
      </div>
      <AssessmentForm formik={formik}>
        <div className="cover-head">
          ز - بررسی وضعیت عمومی و خود مراقبتی بیمار (این قسمت در هر بار پیگیری
          تلفنی پرسیده شود)
        </div>
        <div className="grid grid-cols-6 gap-x-6 gap-y-9 p-6">
          <Textarea
            formik={formik}
            name="a5-q1"
            label="۱ - علایم و نشانه های مربوط به بیماری را نام می برد."
            className="col-span-3"
            detail="( حداقل 3 علامت را نام ببرد.)"
          />
          <Textarea
            formik={formik}
            label="۲ - داروهای مورد استفاده خود را نام می برد."
            className="col-span-3"
            detail="(نام داروها را بگوید)"
            name="a5-q2"
          />
          <Textarea
            formik={formik}
            label="۳ - علایم خطر مرتبط با بیماری، درمان ها یا داروها را نام می برد. "
            className="col-span-6"
            detail="(حداقل 3 علامت خطر را نام ببرد.)"
            name="a5-q3"
          />
          <Textarea
            formik={formik}
            label="۴ - زمان و میزان مصرف داروها را به درستی بیان می کند."
            className="col-span-6"
            detail="(در صورت پاسخ خیر، توصیه به استفاده صحیح و طبق دستور پزشک و استفاده از جعبه قرص شود.)"
            name="a5-q4"
          />
          <Textarea
            formik={formik}
            label="۵ - رژیم غذایی مناسب خود را می داند."
            className="col-span-6"
            detail="در صورت خیر، در خصوص مشاوره تغذیه چه اقدامی انجام داده است؟"
            name="a5-q5"
          />
          <Textarea
            formik={formik}
            label="۶ - ورزش و فعالیت فیزیکی مناسب خود را می داند."
            className="col-span-6"
            detail="در صورت خیر، در این خصوص (مشاوره و....) چه اقدامی انجام داده است؟"
            name="a5-q6"
          />
          <Textarea
            formik={formik}
            label="۷ - راهکارهای پیشگیری و مدیریت درد را می داند (در صورت وجود درد)."
            className="col-span-6"
            detail="در صورت خیر، در این خصوص (مشاوره و....) چه اقدامی انجام داده است؟"
            name="a5-q7"
          />
          <Textarea
            formik={formik}
            label="۸ - راهکارهای پیشگیری و مدیریت علایم مندرج در بخش 'ه' را می داند."
            className="col-span-6"
            detail="در صورت خیر، در این خصوص (مشاوره و....) چه اقدامی انجام داده است؟"
            name="a5-q8"
          />
          <Textarea
            formik={formik}
            label="۹ -  نحوه توزین صحیح و ثبت آن را می داند."
            className="col-span-6"
            detail=""
            name="a5-q9"
          />
          <Textarea
            formik={formik}
            label="۱۰ - زمان مراجعه بعدی/ویزیت دوره ای به درمانگاه/کلینیک دیابت/مطب پزشک مربوطه را می داند."
            className="col-span-6"
            detail="در صورت خیر، چه اقدامی جهت یاد آوری انجام داده است."
            name="a5-q10"
          />
          <Textarea
            formik={formik}
            label="۱۱ - اقدامات لازم در صورت بروز علایم خطر را بیان می کند."
            className="col-span-6"
            detail="(حداقل 5 مورد را نام ببرد.)"
            name="a5-q11"
          />
          <Textarea
            formik={formik}
            label="۱۲ - علایم افت قند خون (بی حالی، ضعف، عرق کردن، لرزش، خواب آلودگی) را می داند."
            className="col-span-6"
            detail="طی هفته گذشته افت قند خون داشته است؟ بله☐      خیر☐
زمان بروز افت قند خون (جهت بررسی از نظر اینکه افت قند خون به علت داروی مصرفی بوده است یا خیر؟)
"
            name="a5-q12"
          />
          <Textarea
            formik={formik}
            label="۱۳ - در صورت مصرف انسولین نکات مراقبتی مرتبط (روش نگهداری، تزریق، زمان استفاده، عوارض، روش های پیشگیری از هایپوگلیسمی و لیپودیستروفی ناشی از آن) را می داند."
            className="col-span-6"
            detail=""
            name="a5-q13"
          />
          <Textarea
            formik={formik}
            label="۱۴ - خودپایشی قند خون را انجام داده و ثبت می نماید (توصیه اکید به انجام آن در راستای پیشگری از عوارض حاد و مزمن بیماری و تنظیم و کاهش دوز داروها شود)."
            className="col-span-6"
            detail="بیمار دلیل عدم انجام خود پایشی را بیان نماید."
            name="a5-q14"
          />
          <Textarea
            formik={formik}
            label="۱۵ - از زمان ترخيص تا کنون در رابطه با بیماری  به اورژانس مراجعه کرده است."
            className="col-span-6"
            detail="در صورت بلی، چند بار مراجعه داشته است؟..............علت مراجعه.........................:."
            name="a5-q15"
          />
          <Textarea
            formik={formik}
            label="۱۶ - در مقايسه با زمان ترخيص بهتر شده  است."
            className="col-span-6"
            detail="(حداقل 3 علامت بهبودی را نام ببرد.)"
            name="a5-q16"
          />
          <Textarea
            formik={formik}
            label="۱۷ - از زمان ترخیص برای بیمار مشکل جدیدی پیش آمده است."
            className="col-span-6"
            detail="نام ببرید."
            name="a5-q17"
          />
          <Textarea
            formik={formik}
            label="۱۸ - در مورد مشکل جدید، اقدامی انجام داده است."
            className="col-span-6"
            detail="چه اقدامی؟"
            name="a5-q18"
          />
          <Textarea
            formik={formik}
            label="۱۹ - از زمان ترخیص تا کنون در رابطه با مشکل فعلی در بیمارستان بستری شده است."
            className="col-span-6"
            detail=""
            name="a5-q19"
          />
          <Textarea
            formik={formik}
            label="۲۰ - بیمار علاقه/ رضایت دارد که پیگیری تلفنی ادامه داشته باشد."
            className="col-span-6"
            detail="در صورت خیر، دلایل ذکر شود...................."
            name="a5-q20"
          />
          <Textarea
            formik={formik}
            label="۲۱ - بیمار دستورات /پیشنهادهای قبلی مشاوره تلفنی را اجرا کرده است."
            className="col-span-6"
            detail=""
            name="a5-q21"
          />
          <Textarea
            formik={formik}
            label="۲۲ - مراقبت های مربوط به پاها را می داند."
            className="col-span-6"
            detail=""
            name="a5-q22"
          />
        </div>
        <div className="cover-head">بررسی آزمایش ها و داروهای بیمار</div>
        <div className="grid grid-cols-6 gap-x-6 gap-y-9 p-6">
          <Textarea
            formik={formik}
            label="نتیجه آخرین FBS"
            className="col-span-3"
            name="last-FBS-Result"
          />
          <Textarea
            formik={formik}
            label="نتیجه آخرین HbA1C"
            className="col-span-3"
            name="last-HbA1C-Result"
          />
          <Textarea
            formik={formik}
            label="بیمار از داروی خوراکی دیابت استفاده می نماید."
            detail="نام دارو(ها):"
            className="col-span-3"
            name="OralMedicineDiabetes"
          />
          <Textarea
            label="سایر داروهای مورد استفاده بیمار"
            detail="نام دارو(ها):"
            className="col-span-3"
            name="otherDrugs"
          />
          <DatePicker
            formik={formik}
            label="تاریخ آخرین آزمایش ها شامل FBS و HbA1C"
            name="FBS-HbA1C-ExperimentDate"
          />

          <RadioCM
            formik={formik}
            label="بیمار برای کنترل قند خون خود از داروی خاصی استفاده می کند."
            className="col-span-2"
            name="hasControlTobloodSugar"
          >
            <Radio value="بله">بله</Radio>
            <Radio value="خیر">خیر</Radio>
          </RadioCM>
          <RadioCM
            formik={formik}
            label="بیمار از انسولین استفاده می نماید"
            className="col-span-2"
            name="useInsulin"
          >
            <Radio value="بله">بله</Radio>
            <Radio value="خیر">خیر</Radio>
          </RadioCM>
        </div>
      </AssessmentForm>
    </Cover>
  );
};

export default AddAssessment1;
