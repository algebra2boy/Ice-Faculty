import { ReactElement } from "react";

interface TextfieldProps {
  textfieldType: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export const KolynTextfield = (props: TextfieldProps): ReactElement => {
  const style = "w-full rounded-lg bg-primaryColor min-h-12 pl-4 focus:outline-mainColor";

  return (
    <input
      type={props.textfieldType}
      placeholder={props.placeholder}
      className={style}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
