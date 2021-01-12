import React, { useEffect, useState } from 'react'
import Heading from './components/Heading'
// import FilterByName from './Components/FilterByName'
import TitleCheckBox from './components/TitleCheckBox'
import TableHeading from './components/TableHeading'
import API from './utils/API'
import './App.css'

function App() {
  const [employees, setEmployees] = useState([])
  const [filter, setFilter] = useState({
    'Front-End Developer': true,
    'Back-End Developer': true,
    'Full-Stack Developer': true,
    'Automated Testing': true,
  })

  useEffect(() => {
    API.getEmployees().then((res) => {
      setEmployees(res)
    })
  }, [])

  return (
    <div className="container">
      <div className="row mt-3 mb-3">
        <Heading
          employees={employees}
          setEmployees={setEmployees}
          key={'Employee Directory'}
        />
        <TitleCheckBox
          filter={filter}
          setFilter={setFilter}
          employees={employees}
          setEmployees={setEmployees}
          key={'Title Check Box'}
        />
      </div>
      <TableHeading
        employees={employees}
        setEmployees={setEmployees}
        key={'Table'}
      />
    </div>
  )
}

export default App
