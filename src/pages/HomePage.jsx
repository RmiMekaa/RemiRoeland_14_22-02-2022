import React from "react";
import Banner from "../components/Banner/Banner";
import Form from "../components/Form/Form";

/**
 * React component for the home page
 * @component
 */
export default function HomePage() {
  return (
    <main className="homepage">
      <Banner text="Create employee" />
      <Form />
    </main>
  )
}