import { ReactNode } from "react";
import "./custom-button.scss";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  text: string;
  loading?: boolean;
  action?: () => void;
  skin: "primary" | "secondary";
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <button className={`custom-button ${props.skin}`} type={props.type}>
      <span>{props.text}</span>
      {typeof props.icon === "string" && (
        <div className="icon">
          <img src={props.icon} alt="" />
        </div>
      )}
      {typeof props.icon != "string" && (
        <div className="icon">{props.icon}</div>
      )}
    </button>
  );
};

export default CustomButton;
