import React, { ReactNode, useState } from "react";

type SidebarContextObj = { isOpen: boolean; toggleSidebar: () => void };

const SidebarContext = React.createContext<SidebarContextObj>({
  isOpen: true,
  toggleSidebar: () => {},
});

export const SidebarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(true);
  function ToggleSidebar() {
    setIsOpen((prev) => !prev);
  }

  const contextValue: SidebarContextObj = {
    isOpen,
    toggleSidebar: ToggleSidebar,
  };
  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
