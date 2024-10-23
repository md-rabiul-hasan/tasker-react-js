import React, { useState } from 'react';

export default function TaskModal({onSave, updateTask}) {
  
  const [task, setTask] = useState(updateTask || {
    id: crypto.randomUUID(),
    title: '',
    description: '',
    tags: [],
    priority: '',
    favourite: false,
  });

  const [isEdit, setIsEdit] = useState(Object.isExtensible(updateTask));


  const handleChange = (event) => {
     const name = event.target.name;
     let value = event.target.value;
     if(name == "tags"){
      value = value.split(",");
      console.log(value);
     }

     setTask({
      ...task,
      [name]: value,
     })
  };

  return (
    <div className="bg-black bg-opacity-60 h-full w-full absolute top-0 z-10 left-0">
      <form
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 absolute top-0 left-1/3"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          { isEdit ? 'Edit New Task' : 'Add New Task' }
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              name="description"
              id="description"
              value={task.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                value={task.tags}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            type="button"
            onClick={()=>onSave(task, isEdit)}
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
           {isEdit ? "Update Task" : "Save Task"}
          </button>
        </div>
      </form>
    </div>
  );
}
