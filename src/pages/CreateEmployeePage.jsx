import React, { useState } from "react";
import Banner from "../components/Banner/Banner";
import Form from "../components/Form/Form";
import CustomModal from "../components/CustomModal/CustomModal";

//import ReactModal from "../../../../React-Modal/react-modal/src/lib/ReactModal"

/**
 * React component for the home page
 * @component
 */
export default function CreateEmployeePage() {
  const [displayModal, toggleDisplayModal] = useState(false);

  const customModalStyle = {
    box: {
      backgroundColor: '#3f3d4b',
      border: '#646167 solid 3px',
      color: '#fcf1d5',
      padding: '2rem 4rem',
    },
    button: {
      backgroundColor: '#27262f',
      color: '#fcf1d5',
    }
  }

  return (
    <main className="homepage">
      <Banner text="Create employee" />
      <Form toggleModal={toggleDisplayModal} />
      <CustomModal
        displayModal={displayModal}
        onClose={() => toggleDisplayModal(false)}
        customStyle={customModalStyle}
        msg="Employee created !"
      />
    </main>
  )
}