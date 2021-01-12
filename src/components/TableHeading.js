import React, { useState } from 'react'
import Rows from './Rows'

function TableHeading({ employees, setEmployees }) {
  const sortTable = (sortBy) => {
    let sortedArray = employees
    let copy = employees
    switch (sortBy) {
      case 'first':
        sortedArray = copy.sort((a, b) => {
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
        sortedArray = copy.sort((a, b) => {
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
    setEmployees(sortedArray)
    console.log(employees)
  }

  return (
    <table className="border-top border-info">
      <tbody>
        <tr className="row justify-content-around mt-2 mb-2">
          <td className="col-1">
            <strong>Profile Image</strong>
          </td>
          <button className="col-2" onClick={() => sortTable('first')}>
            <i className="fa fa-sort mr-1"></i>
            <strong>First Name</strong>
          </button>
          <button className="col-2" onClick={() => sortTable('last')}>
            <i className="fa fa-sort mr-1"></i>
            <strong>Last Name</strong>
          </button>
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
            return <Rows employee={employee} />
          })}
      </tbody>
    </table>
  )
}

export default TableHeading
