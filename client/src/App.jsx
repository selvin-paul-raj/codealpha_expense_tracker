import React from 'react'
import Graph from './Components/Graph'
import Form from './Components/Form'

const App = () => {
  return (
    <div className='App'>
      <div className="container min-w-full  text-center drop-shadow-lg text-gray-800">
      <h1 className="text-4xl py-8 mb-9  text-white bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 border border-gray-100">Expense Tracker</h1>
      
      <div className="grid md:grid-cols-2 gap-4">
        
        <Graph/>
        <Form/>
        <footer>
        <p>Copyright &copy; {new Date().getFullYear() } SPRHackz</p>
      </footer>
      </div>
      </div>
      
    </div>
  )
}

export default App