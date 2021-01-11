import React from 'react'

function TitleCheckBox() {
  // checkboxHandler(event){
  //     event.target.value
  // }

  return (
    <div className="col">
      <div className="checkbox">
        <input
          type="checkbox"
          value="Front-End Developer"
          //   checked={filter['Front-End Developer']}
          //   onChange={checkboxHandler}
        ></input>
        <label>Front-End Developer</label>
      </div>

      <div className="checkbox">
        <input
          type="checkbox"
          value="Back-End Developer"
          //   checked={filter['Back-End Developer']}
          //   onChange={checkboxHandler}
        ></input>
        <label>Back-End Developer</label>
      </div>

      <div className="checkbox">
        <input
          type="checkbox"
          value="Full-Stack Developer"
          //   checked={filter['Full-Stack Developer']}
          //   onChange={checkboxHandler}
        ></input>
        <label>Full-Stack Developer</label>
      </div>

      <div className="checkbox">
        <input
          type="checkbox"
          value="DevOps"
          //   checked={filter['DevOps']}
          //   onChange={checkboxHandler}
        ></input>
        <label>DevOps</label>
      </div>

      <div className="checkbox">
        <input
          type="checkbox"
          value="Automated Testing"
          //   checked={filter['Automated Testing']}
          //   onChange={checkboxHandler}
        ></input>
        <label>Automated Testing</label>
      </div>
    </div>
  )
}

export default TitleCheckBox
