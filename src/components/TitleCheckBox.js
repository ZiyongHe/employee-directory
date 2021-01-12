import React from 'react'

function TitleCheckBox({ filter, setFilter, employees, setEmployees }) {
  const checkboxHandler = (event) => {
    setFilter({ ...filter, [event.target.value]: !filter[event.target.value] })

    let filteredEmployees = employees.map((employee) => {
      if (employee.title === event.target.value) {
        return { ...employee, selected: !employee.selected }
      } else {
        return employee
      }
    })
    setEmployees(filteredEmployees)
  }

  return (
    <div className="col">
      <div className="checkbox">
        <input
          type="checkbox"
          value="Front-End Developer"
          checked={filter['Front-End Developer']}
          onChange={checkboxHandler}
        ></input>
        <label className="ml-2">Front-End Developer</label>
      </div>

      <div className="checkbox">
        <input
          type="checkbox"
          value="Back-End Developer"
          checked={filter['Back-End Developer']}
          onChange={checkboxHandler}
        ></input>
        <label className="ml-2">Back-End Developer</label>
      </div>

      <div className="checkbox">
        <input
          type="checkbox"
          value="Full-Stack Developer"
          checked={filter['Full-Stack Developer']}
          onChange={checkboxHandler}
        ></input>
        <label className="ml-2">Full-Stack Developer</label>
      </div>

      <div className="checkbox">
        <input
          type="checkbox"
          value="Automated Testing"
          checked={filter['Automated Testing']}
          onChange={checkboxHandler}
        ></input>
        <label className="ml-2">Automated Testing</label>
      </div>
    </div>
  )
}

export default TitleCheckBox
