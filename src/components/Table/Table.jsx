import React from 'react';

export default function Table(props) {
  const { headers, data } = props;

  return (
    <div className="tableWrapper">
      <table className='table'>
        <thead>
          <tr>
            {
              headers.map(item => (
                <th key={item}>{item}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map(item => (
              <tr key={item.firstName + item.lastName}>
                {
                  Object.values(item).map(value => (
                    <td key={item + value}>{value}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}