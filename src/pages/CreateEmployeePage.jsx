import React, { useState } from "react";
import Form from "../components/Form/Form";
import { Modal } from "../components/Modal/Modal"

/**
 * Component for the create employee page
 * @component
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