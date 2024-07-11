import React, { useContext, useRef } from "react";

import LoginContext from "../../store/loginContext";
import { images } from "../../constants";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import classes from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";

function LoginBox() {
  const loginCtx = useContext(LoginContext);
  const userNameRef = useRef<HTMLInputElement>(null);
  const errorMessageRef = useRef<HTMLSpanElement>(null);
  const navigate = useNavigate();

  let isValid = true;
  function loginHandler(e: React.FormEvent) {
    e.preventDefault();
    isValid = userNameRef.current?.value === "admin";

    if (userNameRef.current) {
      if (isValid) {
        loginCtx.toggleLogin();
        navigate("/");
      } else {
        userNameRef.current.focus();
        errorMessageRef.current?.setAttribute(
          "style",
          "display: inline-block;opacity: 1"
        );
      }
    }
  }

  return (
    <div className={`${classes.container} ${classes.rtl}`}>
      <div className={classes.loginBox}>
        <div className={classes.logo}>
          {/* <img src={images.logo} alt="logo" /> */}
        </div>
        <h2 className={classes.title}>به حساب کاربری خود وارد شوید</h2>
        <form onSubmit={loginHandler}>
          <Input
            ref={userNameRef}
            type={"text"}
            id={"userName"}
            placeholder={"admin"}
          />
          <span ref={errorMessageRef} className={classes.errorMessage}>
            لطفاً عبارت 'admin' را در کادر نام کاربری وارد کنید.
          </span>
          <Input
            type={"password"}
            id={"pass"}
            value={"admin"}
            readonly={true}
          />
          <Button type="submit">ورود</Button>
          <Link className={classes.forgat_pass} to="/">
            رمز عبورتان را فراموش کرده‌اید؟
          </Link>
          <div className={classes.checkbox}>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">مرا به خاطر بسپار"</label>
          </div>
        </form>
      </div>

      <div className={classes.keyPic}>
        <img src={images.revenueCuate} alt="illustrator key" />
      </div>
    </div>
  );
}

export default LoginBox;
