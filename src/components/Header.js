import React from "react";
import { Link} from "react-router-dom";

function Header(){

  return (
      <div className="border-b-2 backdrop-blur py-3 sticky top-0 z-40 bg-white/75 dark:bg-black/75 border-gray-200 dark:border-slate-300">
          <div className="mx-auto max-w-3xl xl:max-w-5xl flex items-center justify-between px-3 xl:px-0">
                 <div className='w-12 flex justify-center items-center'>
                   <Link to="/">
                     <img src="./logo.png" alt="Logotipo de la empresa"/>
                   </Link>
                 </div>
           <div>
             <Link className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100" to="/">Home</Link>
             <a className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100" href="#">GitHub</a>
           </div>
          </div>
      </div>
  )
}

export default Header

