import Link from "next/link";

type SidebarButtonProps = {
  href: string;
  label: string;
};

const SidebarButton = (props: SidebarButtonProps) => {
  return (
    <Link
      href={props.href}
      className="flex items-center p-2 text-gray-600 rounded hover:bg-gray-200"
    >
      {props.label}
    </Link>
  );
};

export default SidebarButton;
