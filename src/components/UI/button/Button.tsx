import React, { ReactNode } from "react";
import { Button as ButtonCM } from "@chakra-ui/react";

interface Props {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  variant?: "solid" | "outline";
}
const Button: React.FC<Props> = ({
  onClick,
  className,
  children,
  isLoading,
  variant = "solid",
}) => {
  return (
    <ButtonCM
      onClick={onClick}
      isLoading={isLoading}
      className={className}
      colorScheme={"blue"}
      variant={variant}
    >
      {children}
    </ButtonCM>
  );
};

export default Button;
