import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className='col-lg-4 col-md-6 icon-box mt-3'>
         <div className='icon'>
         {props.svg}
         </div>
         <div>
             <h4 className='title'><a href="#">{props.title}</a></h4>
             <p className='description'>{props.desc}</p>
         </div>
    </div>
  )
}

export default ServiceCard