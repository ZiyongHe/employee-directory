import React, { useEffect, useState } from 'react'
import Heading from './components/Heading'
// import FilterByName from './Components/FilterByName'
import TitleCheckBox from './components/TitleCheckBox'
import TableHeading from './components/TableHeading'
import API from './utils/API'
import './App.css'

function App() {
  const [employees, setEmployees] = useState([])
  const [filter, setFilter] = useState('')
  let employeeList = []

  useEffect(() => {
    API.getEmployees().then((res) => {
      setEmployees(res)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      employeeList = res
    })
  }, [])

  return (
    <div className="container" style={{ textAlign: 'enter' }}>
      <div className="row mt-3 mb-3">
        <Heading />
        <TitleCheckBox />
      </div>
      {/* <FilterByName /> */}
      <TableHeading employees={employees} setEmployees={setEmployees} />
    </div>
  )
}

export default App
