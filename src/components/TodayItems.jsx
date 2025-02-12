import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete_icon.png'

const TodayItems = ({id, text,isComplete, deleteTodayTask, toggle}) => {
    return (
        <div>
            <div onClick={()=> toggle(id )} className='flex gap-3 mx-7 my-5 cursor-pointer'>
                <img className='w-7' src={isComplete? tick: not_tick} alt="icon" /> 
                <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? "line-through": ""}`}>{text}</p>
                <img onClick={()=> deleteTodayTask(id)} className='w-7 cursor-pointer ml-auto' src={delete_icon} alt="icon" />
            </div>
        </div>
        
    )
}

export default TodayItems
