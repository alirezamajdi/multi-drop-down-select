import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ReduxProvider from "./store/redux-provider.tsx";
import { SidebarContextProvider } from "./context/sidebarContext.tsx";
import { ThemeContextProvider } from "./context/themeContext.tsx";
import { LoginContextProvider } from "./context/loginContext.tsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ReduxProvider>
        <LoginContextProvider>
          <ThemeContextProvider>
            <SidebarContextProvider>
              <App />
            </SidebarContextProvider>
          </ThemeContextProvider>
        </LoginContextProvider>
      </ReduxProvider>
    </ChakraProvider>
  </React.StrictMode>
);
