import React, { ReactNode } from "react";
import { useLocalStorage } from "usehooks-ts";

type TContext = {
  isLogin: boolean;
  toggleLogin: () => void;
};


const LoginContext = React.createContext<TContext>({
  isLogin: false,
  toggleLogin: () => {},
});

export const LoginContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useLocalStorage<boolean>("isLogin", false);

  function toggleLogin() {
    setIsLogin((prev: boolean) => !prev);
  }

  const loginValue: TContext = {
    isLogin: isLogin,
    toggleLogin: toggleLogin,
  };

  return (
    <LoginContext.Provider value={loginValue}>{children}</LoginContext.Provider>
  );
};

export default LoginContext;


