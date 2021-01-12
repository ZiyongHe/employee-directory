import React from 'react'

function Rows({ employee }) {
  return (
    <tr className="row justify-content-around pt-2 pb-2">
      <td className="col-1">
        <img
          src={employee.picture.thumbnail}
          alt={employee.name.first + employee.name.last}
        />
      </td>
      <td className="col-2">{employee.name.first}</td>
      <td className="col-2">{employee.name.last}</td>
      <td className="col-2">{employee.title}</td>
      <td className="col-3">{employee.email}</td>
      <td className="col-2 justify-content-end">{employee.phone}</td>
    </tr>
  )
}

export default Rows
