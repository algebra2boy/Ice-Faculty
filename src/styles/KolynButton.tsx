import { ReactElement } from "react";

interface ButtonProps {
  label: string;
  isResponsive: boolean;
}

export const KolynButton = (props: ButtonProps): ReactElement => {
  const style = props.isResponsive ? 
    `w-24 md:w-32 lg:w-40 rounded-md bg-mainColor hover:bg-disableColor text-primaryColor min-h-12`:
    `w-40 rounded-md bg-mainColor hover:bg-disableColor text-primaryColor min-h-12`;

  return (
    <button className={style}>
      {props.label}
    </button>
  );
};
