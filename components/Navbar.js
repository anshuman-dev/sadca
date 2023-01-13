import { Disclosure } from '@headlessui/react'
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiFillFileAdd } from "react-icons/ai"
import { BsFillFileArrowUpFill,
         BsFileArrowDownFill,
         BsFillFileBreakFill,
         BsFillFilePptFill,
         } from "react-icons/bs"
import { BsFillFileEarmarkMedicalFill } from "react-icons/bs"

import {
    MdOutlineSpaceDashboard,
    MdOutlineLogout,
} from 'react-icons/md'
import { BiMessageSquareDots } from "react-icons/bi"

const Navbar = () => {
  return (
    <div>
        <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white focus: outline-none focus:ring-2 focus: ring-inset focus:rind-white group hover:bg-gray-900">
            <GiHamburgerMenu className='block md:hidden h-6 w-6'
            aria-hidden="true"
            />
        </Disclosure.Button>
        <div className='p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
            <div className='flex flex-col justify-start items-center'>
                <h1 classname="text-base text-center cursor-pointer font-bold text-black">
                    Navigation Menu
                </h1>
                <br />
            <div className='my-4 border-b border-gray-100 pb-4 w-full'>
                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <MdOutlineSpaceDashboard className="text-2xl text-black group-hover:text-white"/>
                    <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'> Dashboard </h3>
                </div>
                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <BsFillFileArrowUpFill className="text-2xl text-black group-hover:text-white"/>
                    <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'> Sent Files </h3>
                </div>
                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <BsFileArrowDownFill className="text-2xl text-black group-hover:text-white"/>
                    <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'> New Arrivals </h3>
                </div>
                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <BsFillFilePptFill className="text-2xl text-black group-hover:text-white"/>
                    <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'> Pending Files </h3>
                </div>
                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <BsFillFileBreakFill className="text-2xl text-black group-hover:text-white"/>
                    <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'> View Status </h3>
                </div>
                <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <BsFillFileEarmarkMedicalFill className="text-2xl text-black group-hover:text-white"/>
                    <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'> Rework Files </h3>
                </div>
            </div>

            <div className='my-4 border-b w-full'>
                <div className='flex mb-2 justify-start items-center gap-4 px-5 border border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
                    <MdOutlineLogout className="text-2xl text-black group-hover:text-white"/>
                    <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'> LogOut </h3>
                </div>
            </div>
            
            
            </div>
        </div>
        </Disclosure>
    </div>
  )
}

export default Navbar