import React from 'react'
import Navbar_pur from '../../components/Navbar_purchase'
import { useReducer } from "react"
import { BiPlus } from "react-icons/bi"
import Success from '../../components/Success'
import { getFile } from '../../lib/helper'
import { useQuery } from 'react-query'

const formReducer = (state,event)=>{
  return{
    ...state,
    [event.target.name]: event.target.value
  }
}

const New_entry = () => {

  const { isLoading, isError, data, error } = useQuery('files',getFile)

  if(isLoading) return <div>File is Loading</div>
  if(isError) return <div> ERROR FACED: {error}</div>

  const[formData, setFormData] = useReducer(formReducer,{})

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.keys(formData).length == 0) return console.log("Please fill all Details")
    console.log(formData)
  }

  if(Object.keys(formData).length > 0) return <Success message={" New File Added !"}/>
  return (
    <div>
      <Navbar_pur />

      <div className='max-w-[1100px] my-auto mt-24 ml-80 bg-white rounded-1g' style={{borderTopRightRadius: 15, borderBottomLeftRadius: 15, border: 'solid-outset'}}>
            <h6 className='text-center dark:text-white'>You've logged in as </h6>
            <h1 className='text-4xl dark:text-white font-bold text-center'> PURCHASE DEPARTMENT </h1><br />
            <h3 className='text-2xl dark:text-white font-bold text-center'> ADD NEW FILE </h3>
            <br />
            
            <form className='max-w-[500px] mx-auto my-auto w-4/6 gap-4' onSubmit={handleSubmit}>
            <div className='input-type'><label>Select Department</label>
              <select type="text" onChange={setFormData} name="select_department" className="border ml-10 px-5 py-3 focus:outine-none rounded-md" placeholder="Select Department">
                <option value="Purchase Department">Purchase Department</option>
                <option value="Finance Department">Finance Department</option>
                <option value="XYZ Department">XYZ Department</option>
                <option value="audi">ABC Department</option>
              </select>
            </div> <br />
            <div className='input-type'><label>Add File Name</label>
              <input type="text" onChange={setFormData} name="file_name" className="border ml-11 px-5 py-3 focus:outine-none rounded-md" placeholder="File Name"/>
            </div>   <br />
            <div className='input-type'><label>File Description</label>
              <textarea type="text" onChange={setFormData} name="file_description" className="border w-full px-5 py-3 focus:outine-none rounded-md" placeholder="Purpose of this file?" rows="2" cols="2"/>
            </div><br />
            <div className='input-type'><label>Add Comments</label>
              <textarea type="text" onChange={setFormData} name="comments" className="border w-full px-5 py-3 focus:outine-none rounded-md" placeholder="Add Comments" rows="2" cols="2"/>
            </div><br />
            
            <button className='flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>
              ADD FILE <span className="px-1"><BiPlus>{24}</BiPlus></span>
            </button>
            
            
            </form>
            <br /><br />
        </div>
    </div>
  )
}

export default New_entry