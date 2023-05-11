import { PropsWithChildren } from "react";

interface ButtonBaseProps {
  style?: React.CSSProperties;
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function ButtonBase(props: PropsWithChildren<ButtonBaseProps>) {
  return (
    <button style={props.style} className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

interface ButtonProps {
  className?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button({ className = "", onClick, children = null }: PropsWithChildren<ButtonProps>) {
  return (
    <ButtonBase
      className={`
      ${className} px-6 py-4 text-white transition duration-150 ease-in-out
      sm:inline-block
      `}
      onClick={onClick}
    >
      {children}
    </ButtonBase>
  );
}
