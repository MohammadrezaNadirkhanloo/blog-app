import React from "react";

interface btnType {
  primary: "btn-primary";
  secondary: "btn-secondary";
  neutral: "btn-outline";
  error: "btn-error";
}
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant: "primary" | "secondary" | "neutral" | "error";
  className?: string;
}

const btnType: btnType = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  neutral: "btn-outline",
  error: "btn-error",
};

function Button({
  children,
  variant = "primary",
  className,
  ...rest
}: Props) {
  return (
    <button
      className={`btn ${btnType[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
