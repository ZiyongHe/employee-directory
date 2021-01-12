import React from 'react'

function FilterByName({ employees, setEmployees }) {
  const searchHandler = (event) => {
    const input = event.target.value.toUpperCase()

    const filteredArray = employees.map((employee) => {
      if (!input) {
        return { ...employee, selected: true }
      } else if (employee.fullName.indexOf(input) > -1) {
        return { ...employee, selected: true }
      } else {
        return { ...employee, selected: false }
      }
    })
    setEmployees(filteredArray)
  }
  return (
    <form>
      <input
        className="w-50"
        type="text"
        id="search"
        placeholder="Search name here..."
        onChange={searchHandler}
      ></input>
      <br />
    </form>
  )
}

export default FilterByName
