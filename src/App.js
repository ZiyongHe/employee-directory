import React from 'react'
import Heading from './components/Heading'
// import FilterByName from './Components/FilterByName'
// import FilterByTitle from './components/FilterByTitle'
import Cards from './components/Cards'

function App() {
  return (
    <div className="container ">
      <Heading />
      {/* <FilterByName />
      <FilterByTitle /> */}
      <Cards />
    </div>
  )
}

export default App
