import Link from "next/link";

type LinkButtonProps = {
  href: string;
  label: string;
};

const LinkButton = (props: LinkButtonProps) => {
  return (
    <Link
      href={props.href}
      className="bg-blue-500 
       hover:bg-blue-600 
      text-white 
        font-bold 
        py-2 
        px-4 
        rounded 
        shadow-md 
        hover:shadow-lg 
      active:bg-blue-700 
        active:shadow-inner 
        transition 
        duration-150 
        ease-in-out"
    >
      {props.label}
    </Link>
  );
};

export default LinkButton;
