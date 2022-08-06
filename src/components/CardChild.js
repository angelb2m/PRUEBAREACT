import React from 'react'
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    <Link to={`item/${props.data.id}`}>
       <button className="bg-red-500 text-gray-100 font-semibold m-2 p-8 border rounded">
          {props.data.name}
       </button>
    </Link>
  )
}