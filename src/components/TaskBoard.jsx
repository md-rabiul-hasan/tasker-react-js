import React, { useState } from 'react'
import SearchTask from './Tasker/SearchTask'
import TaskAction from './Tasker/TaskAction'
import TaskList from './Tasker/TaskList'
import TaskModal from './Tasker/TaskModal'

export default function TaskBoard() {
	const initialTask = {
		id: 1,
		title: 'First Task',
        description: 'This is a sample task.',
        tags: ['task', 'workflow'],
		priority: "High",
		favourite: false
	}
	const [tasks, setTasks] = useState([initialTask]);
	const [showModal, setShowModal] = useState(false);
  return (
    <section className="mb-20" id="tasks">
		
		<div className="container">
            { showModal && <TaskModal />}
            <SearchTask />
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<div className="mb-14 items-center justify-between sm:flex">
					<h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
					<TaskAction />
				</div>
				<div className="overflow-auto">
					<TaskList tasks={tasks} />
				</div>
			</div>
		</div>
	</section>
  )
}
