import "./Button.css";

interface ButtonProps {
  className: string;
  actionOnClick?: () => void;
  text: string;
}

const Button = ({
  className,
  actionOnClick,
  text,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      type="button"
      className={`button ${className}`}
      onClick={actionOnClick}
      dangerouslySetInnerHTML={{ __html: text }}
    ></button>
  );
};

export default Button;
