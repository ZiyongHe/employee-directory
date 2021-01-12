import React from 'react'
import Rows from './Rows'

function TableHeading({ employees, setEmployees }) {
  const employeesToRender = employees.filter((employee) => employee.selected)

  return (
    <table className="border-top border-info">
      <tbody>
        <tr className="row justify-content-around mt-2 mb-2">
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

        {employeesToRender.map((employee) => {
          return <Rows employee={employee} />
        })}
      </tbody>
    </table>
  )
}

export default TableHeading
