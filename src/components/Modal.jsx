import React from 'react'
import PropTypes from 'prop-types';
import ReactModal from 'react-modal'

/**
 * Wrapper component for the modal
 * @param {Object} props
 * @param {Boolean} props.displayModal Boolean handling the display of the modal
 * @param {function} props.toggleDisplayModal Function to toggle displayModal Boolean
 * @component 
 */
export default function Modal({ displayModal, toggleDisplayModal }) {
  return (
    <ReactModal
      isOpen={displayModal}
      onRequestClose={() => toggleDisplayModal(false)}
      contentLabel="Example Modal"
      overlayClassName={'reactModal'}
      className={"reactModal__content"}
    >
      <span>Employee created !</span>
      <button onClick={() => toggleDisplayModal(false)}>x</button>
    </ReactModal>
  )
}

Modal.propTypes = {
  displayModal: PropTypes.bool.isRequired,
  toggleDisplayModal: PropTypes.func.isRequired,
}