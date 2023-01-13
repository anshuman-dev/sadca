import React from 'react'
import Navbar from '../components/Navbar'
import Table from '../components/Received_files_table'

const Received_files = () => {
  return (
    <div>
      
<Navbar />
      <br />

<form className='max-w-[1100px] my-auto mt-24 ml-80 bg-white rounded-1g' style={{borderTopRightRadius: 15, borderBottomLeftRadius: 15, border: 'solid-outset'}}><br />
            <h6 className='text-center dark:text-white'>You've logged in as </h6>
            <h1 className='text-4xl dark:text-white font-bold text-center'> PURCHASE DEPARTMENT </h1><br />
            <h3 className='text-2xl dark:text-white font-bold text-center'> RECEIVED FILES </h3>
            <br />
            <div className='container mx-auto'>
              <Table />
            </div>
            </form>

    </div>
  )
}

export default Received_files