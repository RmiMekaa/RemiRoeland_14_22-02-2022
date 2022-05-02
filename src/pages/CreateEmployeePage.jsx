import React, { useState } from "react";
import Form from "../components/Form";
import Modal from "../components/Modal"

/**
 * Create employee page component
 * @returns {React.ReactElement} 
 */
export default function CreateEmployeePage() {
  const [displayModal, toggleDisplayModal] = useState(false);

  return (
    <main className="homepage">
      <h1>Create employee</h1>
      <Form {...{ toggleDisplayModal }} />
      <Modal {...{ displayModal, toggleDisplayModal }} />
    </main>
  )
}