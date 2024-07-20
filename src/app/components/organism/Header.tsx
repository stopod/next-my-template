import Link from "next/link";
import React from "react";
import LinkButton from "../atoms/LinkButton";

const Header = () => {
  return (
    <header className="py-5 px-10 border-b flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-extrabold">
          <Link href={"/"}>next template</Link>
        </h1>
      </div>
      <div>
        <nav className="text-sm font-medium">
          <LinkButton name={"sample button"} location={"/"} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
