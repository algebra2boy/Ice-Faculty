import { ReactElement } from "react";

interface ButtonProps {
  label: string;
}

export const KolynButton = (props: ButtonProps): ReactElement => {
  const style = `w-24 md:w-32 lg:w-40 rounded-none bg-mainColor text-primaryColor min-h-12`;

  return (
    <button className={style}>
      {props.label}
    </button>
  );
};
