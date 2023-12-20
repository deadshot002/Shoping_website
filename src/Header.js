import React from 'react'
// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Header(props) {
    
  return (
    <>
        <header className="text-gray-600 body-font" style={props.mode}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <Link to='/Home' className="cursor-pointer mr-5 hover:text-gray-500">Home</Link>
                    <Link to='/Shop' className="cursor-pointer mr-5 hover:text-gray-500">Shop</Link>
                    <button onClick={props.ToggleEvent}>dark mode</button>
                </nav>
                <div className="border-2 border-gray-200 rounded flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0" >
                    <form className="w-full flex" role="search">
                        <input className="py-1 px-1 outline-none border-gray-600 text-gray-600" type="search" placeholder="Search" aria-label="Search" />
                        <button className="py-1 px-1 bg-gray-200 border-0 rounded-r-lg hover:bg-gray-300" type="submit">Search</button>
                    </form>
                </div>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <button className="mt-auto inline-flex items-center border-0 py-1 px-3 focus:outline-none text-base mt-4 md:mt-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                        </svg>
                    </button>
                </div>
            </div>
        </header >

    </>
  )
}