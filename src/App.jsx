import React from "react"
import Dashboard from './components/Dashboard'
import Today from "./components/Today"
import Month from './components/Month'
 
 const App = () => {
   return (
     <div>
      <Dashboard/>
      <div className="sm:flex">
      {/* For today's task list */}
      <Today/>
      <Month/>
      </div>
      
      
       
     </div>
   )
 }
 
 export default App
 