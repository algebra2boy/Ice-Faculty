import { ReactElement } from "react";

interface ButtonProps {
  label: string;
  isResponsive: boolean;
}

export const KolynButton = (props: ButtonProps): ReactElement => {
  const common = `text-xl rounded-md bg-mainColor hover:bg-disableColor text-base-100 min-h-12`;
  const modify = props.isResponsive ? `w-24 md:w-32 lg:w-40 ` : `w-40 `;
  const style = modify + " " + common;

  return (
    <button className={style}>
      {props.label}
    </button>
  );
};
