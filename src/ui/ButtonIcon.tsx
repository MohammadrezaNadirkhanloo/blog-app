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
    " text-primary hover:bg-base-300 flex-1 rounded-none border-0 rounded-bl-2xl",
  secondary: "flex-1 rounded-none rounded-br-2xl",
  outline: " text-secondary-500 hover:bg-secondary-200",
  red: " text-red-500 hover:bg-base-300 flex-1 rounded-none border-0",
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
        text-xl"`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
