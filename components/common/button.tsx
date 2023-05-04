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
// TODO: break down this button and use @components tailwind classes
const styleByVariant = Object.freeze({
  primary: "bg-sky-600 hover:bg-sky-700 hover:text-gray-100",
  secondary: "bg-teal-600 hover:bg-teal-700 hover:text-gray-100",
});

interface ButtonProps {
  className?: string;
  variant?: Variant;
  hidden?: boolean;
  rounded?: boolean;
  filled?: boolean;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button({
  className = "",
  onClick,
  variant = "primary",
  hidden = false,
  rounded = false,
  filled = false,
  disabled = false,
  children = null,
}: PropsWithChildren<ButtonProps>) {
  const primary = filled
    ? styleByVariant.primary
    : "bg-sky-600/70 hover:bg-sky-700/70 hover:text-gray-100 border-4 border-sky-500 hover:border-sky-600";

  const secondary = filled
    ? styleByVariant.secondary
    : "bg-teal-600/70 hover:bg-teal-700/70 hover:text-gray-100 border-4 border-teal-500 hover:border-teal-600";
  return (
    <ButtonBase
      className={`
      ${className} px-6 py-4 text-white transition duration-150 ease-in-out
      sm:inline-block
      ${hidden ? "hidden" : ""}
      ${rounded ? "rounded-full" : ""}
      ${variant === "primary" ? primary : secondary}
      `}
      onClick={onClick}
    >
      {children}
    </ButtonBase>
  );
}
