import React from "react";
import NavItem from "../components/NavItem";

/**
 * Component for the header
 * @component
 */
export default function Header() {

  return (
    <header>
      <nav>
        <NavItem link="/Employees" iconClassName={"navItem__icon__employees"} />
        <NavItem link="/Create-employee" iconClassName={"navItem__icon__home"} />
      </nav>
    </header>
  )
}