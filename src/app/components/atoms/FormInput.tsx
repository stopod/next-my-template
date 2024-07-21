import { useState } from "react";

type FormInputProps = {
  value: string;
  onChange: any;
};

const FormInput = (props: FormInputProps) => {
  return (
    <input
      type="text"
      className="shadow border rounded py-2 px-3 text-gray-700 leaging-tight focus:outline-none"
      onChange={props.onChange}
    />
  );
};

const FormInput2 = () => {
  const [text, setText] = useState<string>("");
  return (
    <input
      type="text"
      className="shadow border rounded py-2 px-3 text-gray-700 leaging-tight focus:outline-none"
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default FormInput2;
