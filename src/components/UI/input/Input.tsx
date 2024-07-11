import React, { useImperativeHandle, useRef, useState } from "react";
import classes from "./Input.module.scss";

interface Props {
  id: string;
  label?: string;
  type: string;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  classes?: string;
  value?: string;
  ref?: HTMLInputElement;
  readonly?: boolean;
  autocomplete?: string;
}

interface IImperativeHandler {
  focus: () => void;
  value?: string;
}

const Input = React.forwardRef<IImperativeHandler, Props>((props, ref) => {
  const {
    minLength,
    maxLength,
    id,
    placeholder,
    readonly,
    autocomplete,
    type,
    label,
  } = props;
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState(props.value || "");

  function inputChangeHandler(e: React.FormEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }

  function inputFocused() {
    inputRef.current?.focus();
    inputRef.current?.setAttribute("style", "border:2px solid red");
  }

  useImperativeHandle(ref, () => {
    return {
      focus: inputFocused,
      value: value,
    };
  });
  return (
    <div className={`${classes.form__control} ${props.classes}`}>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input
        ref={inputRef}
        id={id}
        minLength={minLength}
        maxLength={maxLength}
        type={type}
        placeholder={placeholder}
        value={value}
        readOnly={readonly || false}
        onChange={inputChangeHandler}
        autoComplete={autocomplete || "off"}
      />
    </div>
  );
});

export default Input;
