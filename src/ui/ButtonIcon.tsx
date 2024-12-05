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
  primary: "bg-gray-200 text-primary hover:bg-base-300 ",
  secondary:
    "btn-block rounded-b-2xl rounded-t-none no-animation border-0 border-t-2 border-gray-500",
  outline: " text-secondary-500 hover:bg-secondary-200",
  red: "bg-red-100  text-red-500 hover:bg-red-500 hover:text-white",
  danger: " text-red-500",
};

function ButtonIcon({ children, onClick, className, variant, ...rest }: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        ${btnType[variant]}
        ${className} btn
        [&>svg]:w-6  [&>svg]:h-6 [&>svg]:text-inherit
        text-xs lg:text-xl"`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
