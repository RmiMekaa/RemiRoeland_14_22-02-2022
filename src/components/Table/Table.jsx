import React from 'react';
import { ReactTable } from "interactive-react-table";


function Table({ data, headers }) {
  return (
    <ReactTable {...{ data, headers }} />
  )
}

export default Table