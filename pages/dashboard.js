import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Image from 'next/image'
import { MdCenterFocusStrong } from 'react-icons/md'

const Dashboard = () => {
  return (
    <div className='background-orange-300'>
<Header />      
<Navbar />

<form className='max-w-[1100px] ml-80 bg-white rounded-1g' style={{borderTopRightRadius: 15, borderBottomLeftRadius: 15, border: 'solid-outset'}}><br />
            <h6 className='text-center dark:text-white'>You've logged in as </h6>
            <h1 className='text-4xl dark:text-white font-bold text-center'> PURCHASE DEPARTMENT </h1>
            <div className="tooltip"><button class="flex mx-auto mt-8 text-white bg-green-600 border-0 py-8 px-20 focus:outline-none hover:bg-green-900 text-lg" style={{borderBottomRightRadius: 15, borderTopLeftRadius: 15, border: 'solid-outset'}}> Received Files </button></div>
            <button class="flex mx-auto mt-8 text-white bg-blue-500 border-0 py-8 px-20 focus:outline-none hover:bg-blue-900 text-lg" style={{borderBottomRightRadius: 15, borderTopLeftRadius: 15, border: 'solid-outset'}}>Sent Files</button>
            <button class="flex mx-auto mt-8 text-white bg-yellow-500 border-0 py-8 px-20 focus:outline-none hover:bg-yellow-900 text-lg" style={{borderBottomRightRadius: 15, borderTopLeftRadius: 15, border: 'solid-outset'}}>View Status</button>
            <br />
            <br />
            <br />
            <br />
            </form>

    </div>
  )
}

export default Dashboard