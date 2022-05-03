import React from 'react'

const CompHeader = (props) => {
  return (
    <div>
         <div className="row about">
          <div className="col-12">
            <h2 className='animate__animated animate__bounce'>{props.title}</h2>
            <p>
             {props.text}
            </p>
          </div>
        </div>
    </div>
  )
}

export default CompHeader