import { ReactElement } from "react";

interface TextfieldProps {
  textfieldType: string;
  placeholder: string;
  value: string | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  name: string;
}

export const KolynTextfield = (props: TextfieldProps): ReactElement => {
  const style = "w-full rounded-lg bg-base-100 min-h-12 pl-4 focus:outline-none";

  return (
    <div className="w-full border-4 rounded-lg">
      <input
        type={props.textfieldType}
        placeholder={props.placeholder}
        className={style}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      />
    </div>
  );
};

export const KolynTextfield2 = (props: TextfieldProps): ReactElement => {
  const style = "input input-bordered w-full max-w-xs border-4";

  return (
    <div className="">
      <input
        type={props.textfieldType}
        placeholder={props.placeholder}
        className={style}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      />
    </div>
  );
};
