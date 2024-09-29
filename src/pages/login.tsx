import { Button } from "@chakra-ui/react";
import clsx from "clsx";
import Input from "../components//UI/formTags/input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useLoginContext } from "../context/loginContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const loginCtx = useLoginContext();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object({}),
    onSubmit: async (values: Record<string, string>) => {
      console.log("ccc", values);
    },
  });

  const handleLogin = () => {
    loginCtx.toggleLogin();
    navigate("/");
  };
  return (
    <div className={clsx("bg-auth", "min-h-screen flex-center")}>
      <div className="md:w-[445px] mx-3 rounded-2xl md:rounded-[25px] bg-white shadow-sm py-[30px] px-[30px] md:px-[40px] flex flex-col items-center gap-y-[55px]">
        <img
          src={"/images/logo.jpeg"}
          alt="logo"
          width={180}
          height={110}
          // fill
          className="w-[180px] h-[110px] "
        />
        <div className="text-center">
          <h1 className="font-bold text-[25px] pb-[10px]">ورود | ثبت نام</h1>
          <p className="text-gray">
            برای ثبت نام یا ورود ایمیل و رمزعبور خود را وارد کنید
          </p>
        </div>
        <div className="w-full">
          <Input
            name="mobile"
            formik={formik}
            label="ایمیل"
            className="w-full"
          />
          <Input
            name="mobile"
            formik={formik}
            label="رمز عبور"
            className="w-full mt-4"
          />
        </div>
        <div className="w-full">
          <Button colorScheme="blue" onClick={handleLogin} className="w-full">
            ورود
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
