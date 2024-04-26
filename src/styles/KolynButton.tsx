import { ReactElement } from "react";

interface ButtonProps {
  label: string;
  isResponsive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  bgColor: string;
}

export const KolynButton = (props: ButtonProps): ReactElement => {
  const common = `text-xl rounded-md hover:bg-disableColor text-subColor min-h-12`;
  const modify = props.isResponsive ? `w-24 md:w-32 lg:w-40 ` : `w-40 `;
  const modify2 = modify + props.bgColor;
  const style = modify2 + " " + common;

  return (
    <button 
      className={style}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};
