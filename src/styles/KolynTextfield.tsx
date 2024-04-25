import { ReactElement } from "react";

interface TextfieldProps {
  textfieldType: string;
  placeholder: string;
  value: string | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  name: string | undefined;
}

export const KolynTextfield = (props: TextfieldProps): ReactElement => {
  const style = "w-full rounded-lg bg-primaryColor min-h-12 pl-4 focus:outline-mainColor text-subColor";

  return (
    <input
      type={props.textfieldType}
      placeholder={props.placeholder}
      className={style}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
    />
  );
};
