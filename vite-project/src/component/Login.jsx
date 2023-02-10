import React from 'react'
import api2 from "./api2.json"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
     <nav className='flex list-none px-[45rem]'>
     <Link to="/"> <li className='m-4'>Newsapp</li></Link>
     <Link to="/news"> <li  className='m-4'>Productpage</li></Link>
     </nav>

<div className="grid gap-2 lg:grid-cols-4">
                {api2.map((items, key) => (
                    <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={key}>
                        <img
                            className="object-cover w-full h-48"
                            src={items.image}
                            alt="image"
                        />
                        <div className="p-4">
                            <h4 className="text-xl font-semibold text-blue-600">
                                
                                {items.title}
                            </h4>
                            <p className="mb-2 leading-normal">
                            {items.category}
                            </p>
                            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                                {items.price}
                            </button>
                        </div>
                    </div>
                ))}
            </div>


    </div>
  )
}

export default Login