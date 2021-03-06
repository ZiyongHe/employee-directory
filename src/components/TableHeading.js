import React from 'react'
import Rows from './Rows'

function TableHeading({ employees, setEmployees }) {
  const sortTable = (sortBy) => {
    let copy = [...employees]
    switch (sortBy) {
      case 'first':
        copy.sort((a, b) => {
          if (a.name.first < b.name.first) {
            return -1
          }
          if (a.name.first > b.name.first) {
            return 1
          }
          return 0
        })
        break
      case 'last':
        copy.sort((a, b) => {
          if (a.name.last < b.name.last) {
            return -1
          }
          if (a.name.last > b.name.last) {
            return 1
          }
          return 0
        })
        break
      default:
        break
    }
    setEmployees(copy)
  }

  return (
    <table className="border-top border-info">
      <tbody>
        <tr className="row justify-content-around mt-2 mb-2">
          <td className="col-1">
            <strong>Profile Image</strong>
          </td>
          <td className="col-2">
            <i className="fa fa-sort mr-1"></i>
            <strong id="sort" onClick={() => sortTable('first')}>
              First Name
            </strong>
          </td>
          <td className="col-2">
            <i className="fa fa-sort mr-1"></i>
            <strong id="sort" onClick={() => sortTable('last')}>
              Last Name
            </strong>
          </td>
          <td className="col-2 justify-content-center">
            <strong>Title</strong>
          </td>
          <td className="col-3">
            <strong>Email</strong>
          </td>
          <td className="col-2 justify-content-center">
            <strong>Phone#</strong>
          </td>
        </tr>

        {employees
          .filter((employee) => employee.selected)
          .map((employee) => {
            return <Rows employee={employee} key={employee.fullName} />
          })}
      </tbody>
    </table>
  )
}

export default TableHeading
