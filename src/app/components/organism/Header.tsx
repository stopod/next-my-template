import Link from "next/link";
import React from "react";
import LinkButton from "../atoms/LinkButton";

type HeaderProps = {
  className?: string;
};

const Header = (props: HeaderProps) => {
  return (
    <header
      className={`${props.className} py-5 px-10 border-b flex justify-between items-center bg-white`}
    >
      <div>
        <h1 className="text-2xl font-extrabold">
          <Link href={"/"}>next template</Link>
        </h1>
      </div>
      <div>
        <nav className="text-sm font-medium">
          <LinkButton label={"sample button"} href={"/"} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
