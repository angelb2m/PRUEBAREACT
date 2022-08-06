import React from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Card(props) {
  return (
    <Link to={`category/${props.data.seo_friendly}`}>
       <button className="bg-blue-500 text-gray-100 font-semibold m-2 py-2 px-4 border rounded transition duration-500 ease-in-out transform hover:scale-110 ">
          {props.data.name}
       </button>
    </Link>
  )
}