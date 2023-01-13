import React from 'react'


const Login = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
        </div>

        <div className='bg-yellow-500 flex flex-col justify-center'>
            <form className='max-w-[600px] max-h-[1000px] w-full mx-auto bg-white p-8 px-8 rounded-1g' style={{borderTopRightRadius: 15, borderBottomLeftRadius: 15, border: 'solid-outset'}}>
        
            <br />
            <br />
            
            <h1 className='text-4xl dark:text-white font-bold text-center'> FILE TRACKING SYSTEM </h1>
            <br />
            <br />
                <div className='flex flex-col py-2'>
                    <label> Department Login </label>
                    <input className='rounded-lg bg-gray-100 mt-2 p-2 focus:border-blue-50 focus:bg-gray-200 focus:outline-2' type="text" placeholder="Department ID"></input>
                </div>
                <br />
                <div className='flex flex-col py-2'>
                    <label> Password </label>
                    <input className='rounded-lg bg-gray-100 mt-2 p-2 focus:border-blue-50 focus:bg-gray-200 focus:outline-2' type="password" placeholder="Password"></input>
                </div>
                <br />
            <br />
                <button className='w-full my-5 py-2 bg-orange-500 shadow-1g shadow-orange-500/50 hover: shadow-orange-100/4 text-white font-semibold rounded-lg' > Sign In </button>
            </form>
        </div>
    </div>

    
  )
}

export default Login