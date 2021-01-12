import React from 'react'
import FilterByName from './FilterByName'

function Heading({ employees, setEmployees }) {
  return (
    <div className="col-8">
      <h1>Employee Directory</h1>
      <br />
      <FilterByName
        employees={employees}
        setEmployees={setEmployees}
      ></FilterByName>
    </div>
  )
}

export default Heading
