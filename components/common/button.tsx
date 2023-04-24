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

type Variant = "primary" | "secondary" | "disabled";
const styleByVariant = Object.freeze({
  primary: "bg-sky-600 hover:bg-sky-700 hover:text-gray-100",
  secondary: "bg-teal-500 hover:bg-teal-600 hover:text-gray-100",
  disabled: "bg-gray-300 cursor-not-allowed focus:outline-none disabled:opacity-75",
});

interface ButtonProps {
  variant: Variant;
  hidden?: boolean;
  rounded?: boolean;
  filled?: boolean;
  dark?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button({
  onClick,
  variant = "primary",
  hidden = false,
  rounded = false,
  filled = false,
  dark = false,
  children = null,
}: PropsWithChildren<ButtonProps>) {
  const primary = "bg-sky-600 hover:bg-sky-700 hover:text-gray-100";
  const secondary = "bg-teal-500 hover:bg-teal-600 hover:text-gray-100";
  const disabled = "bg-gray-300 cursor-not-allowed focus:outline-none disabled:opacity-75";
  return (
    <ButtonBase
      className={`
      px-6 py-4 text-sm leading-none text-white transition duration-150 ease-in-out sm:inline-block
      ${dark ? "text-slate-700" : ""}
      ${hidden ? "hidden" : ""}
      ${rounded ? "rounded-full" : ""}
      ${styleByVariant[variant]}
      `}
      onClick={onClick}
    >
      {children}
    </ButtonBase>
  );
}
