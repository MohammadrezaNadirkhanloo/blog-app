interface btnType {
  primary: string;
  secondary: string;
  outline: string;
  red: string;
  danger: string;
}
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant: "primary" | "secondary" | "outline" | "red" | "danger";
  className?: string;
}

const btnType: btnType = {
  primary:
    "bg-blue-100 text-primary hover:bg-blue-500 hover:text-white",
  secondary:
    "bg-gray-200  text-gray-500 hover:bg-gray-300 hover:text-secondary-0",
  outline:
    "border border-secondary-200 text-secondary-500 hover:bg-secondary-200",
  red: "bg-red-100  text-red-500 hover:bg-red-500 hover:text-white",
  danger: "border border-red-100 text-red-500",
};

function ButtonIcon({ children, onClick, className, variant, ...rest } :Props) {
  return (
    <button
      onClick={onClick}
      className={`
        ${btnType[variant]}
        ${className} flex items-center justify-center gap-x-1 rounded-md p-1
        [&>svg]:w-6  [&>svg]:h-6 [&>svg]:text-inherit
        text-xs lg:text-xl
        transition-all duration-300 ease-out"`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
