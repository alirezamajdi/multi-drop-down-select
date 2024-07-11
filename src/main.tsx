import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SidebarContextProvider } from "./store/sidebarContext";
import { ThemeContextProvider } from "./store/themeContext";
import { LoginContextProvider } from "./store/loginContext";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <LoginContextProvider>
        <ThemeContextProvider>
          <SidebarContextProvider>
            <App />
          </SidebarContextProvider>
        </ThemeContextProvider>
      </LoginContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
