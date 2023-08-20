import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className=' bg-slate-700 hidden md:block  md:w-40 lg:w-60 xl:w-60  h-screen md:h-screen lg:h-screen xl:h-screen text-white'>
                <div className='w-60 h-20 bg-slate-900'></div>

                <div className='mx-auto py-5 ml-4 gap-10'>
                    <Link to="/">
                        <div className='mx-auto lg:px-5 text-xs md:text-base lg:text-xl  mb-10 cursor-pointer hover:text-gray-900 font-bold'>Contacts</div><hr />
                    </Link>
                    <Link to="/mapandchart">
                        <div className='mx-auto text-xs md:text-base lg:text-xl  lg:px-5   mt-10 mb-10 cursor-pointer hover:text-gray-900 font-bold'>MapsAndChart</div><hr />
                    </Link>
                </div>
            </div>

            <div className='absolute md:hidden bg-slate-700 w-full h-10 top-11 '>
                <div className='flex justify-between'>
                    <Link to="/" className=" h-8 w-2/4 text-center text-white text-sm flex ">
                        <p className='mx-auto  cursor-pointer  hover:text-gray-900 my-auto'>Contacts</p>
                    </Link>
                    <Link to="/mapandchart" className=" h-8 w-2/4 text-center text-white text-sm flex ">
                        <p className='mx-auto  cursor-pointer hover:text-gray-900 my-auto '>MapsAndChart</p>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Sidebar