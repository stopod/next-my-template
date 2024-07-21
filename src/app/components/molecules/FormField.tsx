import { ChangeEvent } from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

type FormFieldProps = {
  label: string;
  id: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const FormField = ({ label, id, type, name, value, onChange }: FormFieldProps) => (
  <div className="mb-4">
    <Label htmlFor={id}>{label}</Label>
    <Input type={type} id={id} name={name} value={value} onChange={onChange} />
  </div>
);

export default FormField;
