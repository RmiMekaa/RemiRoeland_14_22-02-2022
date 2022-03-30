import React from "react";
import PropTypes from 'prop-types';
import './CustomModal.scss';

CustomModal.propTypes = {
  children: PropTypes.element,
  displayModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  customStyle: PropTypes.object,
  autoClose: PropTypes.number,
  msg: PropTypes.string,
}

/**
 * Custom modal component
 * @component
 */
export default function CustomModal(props) {
  const { displayModal, onClose, customStyle, autoClose, msg } = props;

  if (displayModal === false) return null;
  if (autoClose) setTimeout(() => closeModalEvent(), autoClose)

  return (
    <div className="customModal" style={customStyle.wrapper} onKeyDown={(e) => handleKeyDown(e)} tabIndex={0}>
      <div className="customModal__content" style={customStyle.box} >
        <button className="customModal__content__close" style={customStyle.button} onClick={() => closeModalEvent()}>x</button>
        {msg && <span>{msg}</span>}
        {props.children}
      </div>
    </div>
  )

  function handleKeyDown(e) {
    if (e.key === 'Escape') return closeModalEvent()
  }

  function closeModalEvent() {
    onClose();
  }
}