import Image from "next/image";
import React from "react";
import Logo from "@/assets/book.ico";

const Nav = () => {
  const link = (
    <>
      <li>Home</li>
      <li>Listed Books</li>
      <li>Pages to Read</li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          ></div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <div className="btn btn-ghost text-xl">
          <Image src={Logo} alt="loga icon" height={30} width={30} />
          <a>Book Vibe</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{link}</ul>
      </div>
      <div className="navbar-end gap-4">
        <button className="btn bg-success">Sign Up</button>
        <button className="btn bg-primary">Sign In</button>
      </div>
    </div>
  );
};

export default Nav;
