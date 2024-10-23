import React from 'react'

export default function TaskAction({onAddClick}) {
  return (
    <>
    <div className="flex items-center space-x-5">
						<button onClick={onAddClick} className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold">Add Task</button>
					</div>
                    </>
  )
}
