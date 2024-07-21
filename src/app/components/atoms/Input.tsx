import { ChangeEvent } from "react";

type InputProps = {
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const Input = ({ type, id, name, value, onChange }: InputProps) => (
  <input
    type={type}
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    className="border rounded px-2 py-1 w-full"
  />
);

export default Input;
