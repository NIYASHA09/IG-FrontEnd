import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='text-center border-2 border-black rounded-lg p-16'>
            <h1 className='text-8xl font-bold'>404</h1>
            <p className='text-xl'>Page Not Found. <a href='/' className='underline'>Go to Home page</a>.</p>
        </div>
    </div>
  )
}

export default NotFoundPage