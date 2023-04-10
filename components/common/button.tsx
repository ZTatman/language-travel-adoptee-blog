import { PropsWithChildren } from "react";

interface ButtonProps {
  style?: React.CSSProperties;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <button style={props.style} className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
