import React from 'react'
import Rows from './Rows'

function TableHeading({ employees, setEmployees }) {
  return (
    <table className="border-top border-info">
      <tbody>
        <tr className="row justify-content-around">
          <td className="col-1">
            <strong>Profile Image</strong>
          </td>
          <td className="col-1">
            <strong>First Name</strong>
          </td>
          <td className="col-1">
            <strong>Last Name</strong>
          </td>
          <td className="col-3 justify-content-center">
            <strong>Title</strong>
          </td>
          <td className="col-3">
            <strong>Email</strong>
          </td>
          <td className="col-3 justify-content-center">
            <strong>Phone Number</strong>
          </td>
        </tr>

        {employees.map((employee) => {
          return <Rows employee={employee} setEmployees={setEmployees} />
        })}
      </tbody>
    </table>
  )
}

export default TableHeading
