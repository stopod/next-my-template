type LabelProps = {
  htmlFor: string;
  children: React.ReactNode;
};

const Label = ({ htmlFor, children }: LabelProps) => (
  <label htmlFor={htmlFor} className="block mb-1 font-medium">
    {children}
  </label>
);

export default Label;
