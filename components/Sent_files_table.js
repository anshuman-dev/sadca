import React from 'react'
import { getFile } from '../../lib/helper'
import { useQuery } from 'react-query'
const Sent_files_table = () => {

    const { isLoading, isError, data, error } = useQuery('files',getFile)

    if(isLoading) return <div>File is Loading</div>;
    if(isError) return <div> ERROR FACED: {error}</div>

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
                        <span className='text-gray-200'> Sent Time </span>
                    </th>
                </tr>
            </thead>
            <tbody className='bg-gray-200'>
                {
                    data.map((obj,i)=><Tr {...obj}key={i}/>)
                }
            </tbody>
        </table>
    </div>
  )
}

function Tr({id,filename,department,comments,time}){
    return (
        <tr className="bg-gray-50 text-justify">
                    <td className='px-16 py-2 flex flex-row items-center'>
                            <span className='="text-center ml-2 font-semibold'> {id || "Unknown"} </span>
                    </td>
                    <td className='px-16 py-2'>
                            <span> {filename || "Unknown"} </span>
                    </td>
                    <td className='px-16 py-2'>
                            <span> {department || "Unknown"} </span>
                    </td>
                    <td className='px-16'>
                            <span> {comments || "Unknown"} </span>
                    </td>
                    <td className='px-16 py-2'>
                            <span> {time || "Unknown"} </span>
                    </td>

                </tr>
    )
}

export default Sent_files_table