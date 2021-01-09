import React from 'react'
// import Card from './Card'

function Cards() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <strong>Profile Image</strong>
        </div>
        <div className="col">
          <strong>First Name</strong>
        </div>
        <div className="col">
          <strong>Last Name</strong>
        </div>
        <div className="col">
          <strong>Title</strong>
        </div>
        <div className="col">
          <strong>Email</strong>
        </div>
        <div className="col">
          <strong>Phone Number</strong>
        </div>
      </div>

      <div className="row">{/* <Card /> */}</div>
    </div>
  )
}

export default Cards
