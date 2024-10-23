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
	const [updateTask, setUpdateTask] = useState(null);

	function handleAddEditTask(newTask, isEdit){
		if(isEdit){
			const newUpdatedTaskList = tasks.map(task => {
				if(task.id === newTask.id){
                    return newTask;
                }
                return task;
			});
			setTasks(newUpdatedTaskList);
		}else{
			setTasks([...tasks, newTask]);
		}		
		closeModal();
	}

	function handleEdit(task){
		setUpdateTask(task);
		setShowModal(true);
	}

	function closeModal(){
		setShowModal(false);
	}

	function handleDelete(id){
		const newUpdatedTaskList = tasks.filter(task => task.id != id);
		setTasks(newUpdatedTaskList);
	}

	function handleFavourite(id) {
		const newUpdatedTaskList = tasks.map(task => {
			if (task.id === id) {
				// Return an updated task object instead of an array
				return { ...task, favourite: !task.favourite };
			}
			// Return the task as is if not matching the id
			return task;
		});
		setTasks(newUpdatedTaskList);
	}

  return (
    <section className="mb-20" id="tasks">
		
		<div className="container">
            { showModal && <TaskModal   onSave={handleAddEditTask} updateTask={updateTask} />}
            <SearchTask />
			<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
				<div className="mb-14 items-center justify-between sm:flex">
					<h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
					<TaskAction onAddClick={ ()=> setShowModal(true) } />
				</div>
				<div className="overflow-auto">
					<TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} onFavourite={handleFavourite}/>
				</div>
			</div>
		</div>
	</section>
  )
}
