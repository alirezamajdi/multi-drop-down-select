import UserInfoForm from "../../components/forms/UserInfo-Form";
import Cover from "../../components/cover/Cover";
import { useFormik } from "formik";
import * as Yup from "yup";

const New = () => {
  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object({}),
    onSubmit: async (values: Record<string, string>) => {
      console.log("ccc", values);
    },
  });
  return (
    <Cover>
      <UserInfoForm formik={formik} />
    </Cover>
  );
};

export default New;
