import React from 'react'

const CompHeader = ({text,title}) => {
  return (
    <div>
         <div className="row about">
          <div className="col-12">
            <h2 className='animate__animated animate__bounce'>{title}</h2>
            <p>
             {text}
            </p>
          </div>
        </div>
    </div>
  )
}

export default CompHeader