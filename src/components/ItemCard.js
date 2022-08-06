import React from 'react'

export default function Card(props) {
  console.log("ITEMCARD: ", props)
  return (
       <div className="bg-green-500 flex flex-col text-gray-100 m-2 p-8 border rounded">
         <div className='flex justify-between'>
           <label className='font-semibold mr-8'>Amenity Parent Id:</label>
           <label>{props.data.amenity_parent}</label>
         </div>
         <div className='flex justify-between'>
          <label className='font-semibold mr-8'>Item Id:</label>
          <label>{props.data.id}</label>
         </div>
         <div className='flex justify-between'>
           <label className='font-semibold mr-8'>Category Id:</label>
           <label>{props.data.property_category}</label>
         </div>
         <div className='flex justify-between'>
           <label className='font-semibold mr-8'>SEO Frienly Text:</label>
           <label>{props.data.seo_friendly}</label>
         </div>
         <div className='flex justify-between'>
           <label className='font-semibold mr-8'>Item Name:</label>
           <label>{props.data.name}</label>
         </div>
       </div>
  )
}