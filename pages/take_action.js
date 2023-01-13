import React from 'react'
import { useReducer } from "react"
import { BiPlus } from "react-icons/bi"
import Success from '../components/Success'

const formReducer = (state,event)=>{
  return{
    ...state,
    [event.target.name]: event.target.value
  }
}

const Take_action = () => {

  const[formData, setFormData] = useReducer(formReducer,{})

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.keys(formData).length == 0) return console.log("Please fill all Details")
    console.log(formData)
  }

  if(Object.keys(formData).length > 0) return <Success message={" New File Added !"}/>
  return (
    <div>

      <div className='max-w-[1100px] my-auto mx-auto mt-24 bg-white rounded-1g' style={{borderTopRightRadius: 15, borderBottomLeftRadius: 15, border: 'solid-outset'}}>
            <br />
            <h1 className='text-4xl dark:text-white font-bold text-center'> ACTION </h1><br />
            <br />
            
            <form className='max-w-[500px] mx-auto my-auto w-4/6 gap-4' onSubmit={handleSubmit}>
            <div className='input-type'><label>FILE ID</label>
              <input type="text" onChange={setFormData} name="select_department" className="border ml-10 px-5 py-3 focus:outine-none rounded-md" placeholder="Select Department">
              </input>
            </div> <br />
            <div className='input-type'><label>File Name</label>
              <input type="text" onChange={setFormData} name="file_name" className="border ml-11 px-5 py-3 focus:outine-none rounded-md" placeholder="File Name"/>
            </div>   <br />
            <div className='input-type'><label>File Description</label>
              <textarea type="text" onChange={setFormData} name="file_description" className="border w-full px-5 py-3 focus:outine-none rounded-md" placeholder="Purpose of this file?" rows="2" cols="2"/>
            </div><br />
            <div className='input-type'><label>Add Comments</label>
              <textarea type="text" onChange={setFormData} name="comments" className="border w-full px-5 py-3 focus:outine-none rounded-md" placeholder="Add Comments" rows="2" cols="2"/>
            </div><br />
            
            <button className='flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>
              ACCEPT <span className="px-1"><BiPlus>{24}</BiPlus></span>
            </button>
            <button className='flex justify-center text-md w-2/6 bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-red-500 hover:text-red-500'>
              REJECT <span className="px-1"><BiPlus>{24}</BiPlus></span>
            </button>
            <button className='flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>
              REWORK <span className="px-1"><BiPlus>{24}</BiPlus></span>
            </button>
            
            
            </form>
            <br /><br />
        </div>
    </div>
  )
}

export default Take_action