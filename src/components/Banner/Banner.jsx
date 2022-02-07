import React from "react";

/**
 * React banner component
 * @param {Object} props
 * @property {String} props.text
 * @component
 */
export default function Banner(props) {

  return (
    <h1 className="banner">{props.text}</h1>
  )
}