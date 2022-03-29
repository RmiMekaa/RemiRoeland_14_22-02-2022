import React from "react";
import NavItem from "../NavItem/NavItem";

/**
 * React component for the header
 * @component
 */
export default function Header() {

  return (
    <header>
      <nav>
        <NavItem link="/" icon={"home"} />
        <NavItem link="/Employees" icon={"employees"} />
      </nav>
    </header>
  )
}