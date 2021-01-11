import React from 'react'
import Heading from './components/Heading'
// import FilterByName from './Components/FilterByName'
// import FilterByTitle from './components/FilterByTitle'
import TableHeading from './components/TableHeading'
import './App.css'

function App() {
  return (
    <div className="container" style={{ textAlign: 'enter' }}>
      <Heading />
      {/* <FilterByName />
      <FilterByTitle /> */}
      <TableHeading />
    </div>
  )
}

export default App
