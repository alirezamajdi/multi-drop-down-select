import Cover from "../../components/cover/Cover";
import * as Yup from "yup";
import { useFormik } from "formik";
import UserInfoForm from "../../components/forms/UserInfo-Form";

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
      <UserInfoForm formik={formik} />
    </Cover>
  );
};

export default AddAssessment3;
