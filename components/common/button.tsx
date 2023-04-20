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
  hidden?: boolean;
  rounded?: boolean;
  filled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button({ onClick, hidden = false, rounded = false, filled = false, children = null }: PropsWithChildren<ButtonProps>) {
  return (
    <ButtonBase
      className={`
      ${hidden ? "hidden" : ""}
      ${rounded ? "rounded-full" : ""} 
      ${filled
          ? "bg-sky-600 text-white hover:bg-sky-700 hover:text-gray-100"
          : "border-[3px] border-sky-600 bg-none text-zinc-700 hover:border-sky-700"
      }
      text-sm px-6 py-2 leading-none transition duration-150 ease-in-out sm:inline-block`}
      onClick={onClick}
    >
      {children}
    </ButtonBase>
  );
}
