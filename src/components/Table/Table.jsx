import React from 'react';
import { ReactTable } from "interactive-react-table";
import PropTypes from 'prop-types';

/**
 * Wrapper component for the React Table
 * @param {Object} props 
 * @param {Array.<Object>} props.data The data to use in the table
 * @param {Array.<Object>} props.headers The headers to use in the table
 * @returns 
 */
export default function Table({ data, headers }) {
  return (
    <ReactTable {...{ data, headers }} />
  )
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
}