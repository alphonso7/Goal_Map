import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodayItems from './TodayItems'


const Today = () => {

    const inputref = useRef();

    // const [todayTask, setTodayTask] = useState([]);
    // const [todayTask, setTodayTask] = useState(localStorage.getItem("Tasks of today")?JSON.parse(localStorage.getItem("Tasks of today")): []);
    const [todayTask, setTodayTask] = useState(() => {
        const savedTasks = localStorage.getItem("Tasks of Today");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        if (todayTask.length > 0) {
            localStorage.setItem("Tasks of Today", JSON.stringify(todayTask));
        }
    }, [todayTask]);

    const add = (event) => {

        if (event.type === 'keydown' && event.key !== 'Enter') return;
        const inputText = inputref.current.value;

        console.log(inputText);

        if (inputText === "") {
            return null;
        }
        const newTask = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTodayTask((prevTask) =>
            [...prevTask, newTask]
        );
        inputref.current.value = "";
    }

    const deleteTodayTask = (id) => {
        setTodayTask((prevTasks) => {
            let updatedItems = prevTasks.filter((task) => task.id !== id);
            console.log(updatedItems)
            return updatedItems;
        });
    }

    const toggle = (id) => {
        setTodayTask((prevTask) => {
            let updated = prevTask.map((e) =>
                e.id === id ? { ...e, isComplete: !e.isComplete } : e
            )
            return updated;
        })

    }



    return (
        // ---------display title and box-------
        <div className='bg-white place-self-start m-10 min-h-[550px] rounded-xl sm:min-w-100'>
            <div className='flex mt-7 p-4 gap-2'>
                <img className='h-10' src={todo_icon} alt="Icon" />
                <h3 className='text-2xl font-semibold'>Tasks for today</h3>
            </div>
            {/* ---------display add button------- */}
            <div className='bg-gray-200 flex items-center my-6 rounded-full max-h-15 w-70 place-self-center'>
                <input ref={inputref} onKeyDown={add}  className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='add task' />
                <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add +</button>
            </div>
            {/* ---------display tasks------- */}

            {/* <TodayItems text="Complete practicals" />
            <TodayItems text="Watch movie" /> */}
            {todayTask ? (todayTask.map((item, index) => {
                return <TodayItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodayTask={deleteTodayTask} toggle={toggle} />
            })) : console.log("List is null" + typeof (todayTask))}




        </div>
    )
}

export default Today
