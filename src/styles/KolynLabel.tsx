import { ReactElement } from "react";

interface LabelProps {
  label: string;
}

export const KolynLabel = (props: LabelProps): ReactElement => {
  const style = `text-2xl font-bold m-auto`;

  return (
    <h2 className={style}>
      {props.label}
    </h2>
  );
};
