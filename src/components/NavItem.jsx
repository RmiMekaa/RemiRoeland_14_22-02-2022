import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

/**
 * React component for nav item
 * @param {Object} props
 * @property {String} props.link  Redirection path
 * @property {String} [props.iconClassName]  className used to set icon as background image in css rules
 * @component
 */
export default function NavItem({ link, iconClassName }) {

  return (
    <NavLink exact="true" to={{ pathname: link }} className="navItem">
      <div className={"navItem__icon " + (iconClassName && iconClassName)}></div>
    </NavLink >
  )
}

NavItem.propTypes = {
  link: PropTypes.string.isRequired,
  iconClassName: PropTypes.string,
}