import React from "react";
import { NavItem } from "../components/NavItem";

/**
 * Header Component
 * @returns {React.ReactElement} 
 */
export function Header() {

  return (
    <header>
      <nav>
        <NavItem link="/Employees" iconClassName={"navItem__icon__employees"} />
        <NavItem link="/Create-employee" iconClassName={"navItem__icon__home"} />
      </nav>
    </header>
  )
}