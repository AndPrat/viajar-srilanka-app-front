import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import "./Button.css";

interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  actionOnClick?: () => void;
}

const Button = ({
  className,
  actionOnClick,
  children,
  ...props
}: Partial<ButtonProps>): React.ReactElement => {
  return (
    <button
      className={`button ${className}`}
      onClick={actionOnClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
