import React from "react";
import { NavLink } from "react-router-dom";

/**
 * React component for nav item
 * @param {Object} props
 * @property {String} props.link  Redirection path
 * @property {String} props.icon  Icon type used for style ("home" | "employees")
 * @component
 */
export default function NavItem(props) {
  const { link, icon } = props;

  return (
    <NavLink exact="true" to={{ pathname: link }} className="navItem">
      <div className={"navItem__icon navItem__icon__" + icon}></div>
    </NavLink >
  )
}