import React from "react"
import Dashboard from './components/dashboard'
import Today from "./components/Today"
import Month from './components/Month'
 
 const App = () => {
   return (
     <div>
      <Dashboard/>
      <div className="sm:flex">
      {/* For today's task */}
      <Today/>
      <Month/>
      </div>
      
      
       
     </div>
   )
 }
 
 export default App
 