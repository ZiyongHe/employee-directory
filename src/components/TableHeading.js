import React, { useEffect, useState } from 'react'
import Rows from './Rows'
import API from '../utils/API'

function TableHeading() {
  const [employees, setEmployees] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    API.getEmployees().then((res) => {
      setEmployees(res)
    })
  }, [])

  return (
    <>
      <div className="row justify-content-around">
        <div className="col-1">
          <strong>Profile Image</strong>
        </div>
        <div className="col-1">
          <strong>First Name</strong>
        </div>
        <div className="col-1">
          <strong>Last Name</strong>
        </div>
        <div className="col-3 justify-content-center">
          <strong>Title</strong>
        </div>
        <div className="col-3">
          <strong>Email</strong>
        </div>
        <div className="col-3 justify-content-center">
          <strong>Phone Number</strong>
        </div>
      </div>

      {employees.map((employee) => {
        return <Rows employee={employee} setEmployees={setEmployees} />
      })}
    </>
  )
}

export default TableHeading
