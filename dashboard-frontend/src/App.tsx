import React from 'react'
import AppRoutes from './AppRoutes'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <h1 className='flex justify-center text-4xl bg-gray-100 text-blue-500 font-semibold py-6'>INPROCODE</h1>
        <Navbar/>
        <AppRoutes/>
    </>
  )
}

export default App