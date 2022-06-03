import React from 'react'

const ServiceCard = ({svg,title,desc}) => {
  return (
    <div className='col-lg-4 col-md-6 icon-box mt-3'>
         <div className='icon'>
         {svg}
         </div>
         <div>
             <h4 className='title'><a href="#">{title}</a></h4>
             <p className='description'>{desc}</p>
         </div>
    </div>
  )
}

export default ServiceCard