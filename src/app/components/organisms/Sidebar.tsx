import SidebarButton from "../atoms/SidebarButton";

type NavItem = {
  href: string;
  label: string;
};

type SidebarProps = {
  items: NavItem[];
};

const Sidebar = (props: SidebarProps) => {
  return (
    <>
      <aside
        className="
          w-64 bg-gray-100 h-screen fixed top-0 left-0 overflow-y-auto transition-transform
          translate-x-0
          md:translate-x-0
        "
      >
        <nav className="p-4">
          <ul className="space-y-2">
            {props.items.map((item, index) => (
              <li key={index}>
                <SidebarButton href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
