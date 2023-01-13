import React from 'react'
import Navbar_pur from '../../components/Navbar_purchase'
import Table from '../../components/Sent_files_table'

const Sent_files = () => {
  return (
    <div>
<Navbar_pur />

<form className='max-w-[1100px] my-auto mt-24 ml-80 bg-white rounded-1g' style={{borderTopRightRadius: 15, borderBottomLeftRadius: 15, border: 'solid-outset'}}><br />
            <h6 className='text-center dark:text-white'>You've logged in as </h6>
            <h1 className='text-4xl dark:text-white font-bold text-center'> PURCHASE DEPARTMENT </h1><br />
            <h3 className='text-2xl dark:text-white font-bold text-center'> SENT FILES </h3>
            <br />
            <div className='container mx-auto'>
              <Table />
            </div>
            </form>
    </div>
  )
}

export default Sent_files