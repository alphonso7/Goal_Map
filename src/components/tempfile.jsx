import React, { useState } from "react";

const Dashboard = () => {

  return (
    <div className="bg-sky-500 w-full ">
      <nav className="sm:flex justify-between p-4">
        <div className="text-3xl font-bold mx-8">
          My Dashboard
        </div>
        <ul className="place-self-end gap-8 mx-9 sm:flex text-amber-950">
          <li className="cursor-pointer hover:font-bold transition-all text-xl" href="">Templates</li>
          <li className="cursor-pointer hover:font-bold transition-all text-xl" href="">Calendar</li>
        </ul>
      </nav>


    </div>




  )
}

export default Dashboard
