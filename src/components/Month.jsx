import React from 'react'

const Month = () => {
    return (
        <div className='bg-white rounded-2xl min-w-md m-9 p-3 place-items-center'>
            <div>
                <h2 className='font-semibold text-2xl mt-7'>Your Monthly goals</h2>
                <input className='mt-3' type="text" placeholder='add goal' />
                <button>Add +</button>
            </div>
            <div>
                Monthly goals currently not working
            </div>
        </div>
    )
}

export default Month
