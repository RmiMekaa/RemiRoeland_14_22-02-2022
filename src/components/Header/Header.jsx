import React from "react";
import NavItem from "../NavItem/NavItem";

/**
 * Component for the header
 * @component
 */
export default function Header() {

  return (
    <header>
      <nav>
        <NavItem link="/" iconClassName={"navItem__icon__home"} />
        <NavItem link="/Employees" iconClassName={"navItem__icon__employees"} />
      </nav>
    </header>
  )
}