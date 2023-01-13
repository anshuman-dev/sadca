import React from 'react'
import { BiEdit } from 'react-icons/bi'

const Received_files_table = () => {
  return (
    <div>
        <table className='min-w-full table-auto'>
            <thead>
                <tr className='bg-gray-800'>
                    <th className='px-1 py-2'>
                        <span className='text-gray-200'> File ID </span>
                    </th>
                    <th className='px-1 py-2'>
                        <span className='text-gray-200'> File Name </span>
                    </th>
                    <th className='px-1 py-2'>
                        <span className='text-gray-200'> Department Concerned </span>
                    </th>
                    <th className='px-1 py-2'>
                        <span className='text-gray-200'> Comments </span>
                    </th>
                    <th className='px-1 py-2'>
                        <span className='text-gray-200'> Action </span>
                    </th>
                </tr>
            </thead>
            <tbody className='bg-gray-200'>
                <tr className="bg-gray-50 text-justify">
                    <td className='px-16 py-2 flex flex-row items-center'>
                        <img src="#" alt="" />
                            <span className='="text-center ml-2 font-semibold'> PUR_1001 </span>
                    </td>
                    <td className='px-16 py-2'>
                            <span> First File </span>
                    </td>
                    <td className='px-16 py-2'>
                            <span> Finance Department </span>
                    </td>
                    <td className='px-16'>
                            <span> Please make it urgent </span>
                    </td>
                    <td className='px-16'>
                        <button className='cursor'><BiEdit size={25}/></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Received_files_table