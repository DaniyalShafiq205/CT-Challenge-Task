// Project.jsx
import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task'
import { handleAddTask } from './taskApi';
const Project = ({ fetchProjects, project }) => {
    const [isTaskFormVisible, setIsTaskFormVisible] = useState(false);
    const [newTaskName, setNewTaskName] = useState('');
    const addTask = (projectId) => {
        handleAddTask(projectId, newTaskName, setNewTaskName, fetchProjects);
    };

    return (
        <div className="bg-white shadow-md rounded-md p-4 mb-4">
            <h2 className="text-xl font-semibold mb-4">{project.name}</h2>
            <Droppable droppableId={`project-${project.id}`} key={project.id}>
                {(provided) => (
                    <div className="space-y-4" ref={provided.innerRef} {...provided.droppableProps}>

                        {project.tasks.map(
                            (task, index) => (
                                <Task task={task} index={index} key={index} />
                            ))}
                        {!isTaskFormVisible && (
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out flex items-center"
                                onClick={() => {
                                    setNewTaskName('');
                                    setIsTaskFormVisible(true);
                                }}
                            >
                                {/* Add Task */}
                                <svg
                                    className="w-4 h-4 ml-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        )}

                        {isTaskFormVisible && (
                            <div className="mt-4 border border-gray-300 rounded-md p-4">
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md p-2 mb-2 focus:outline-none focus:border-blue-500"
                                    placeholder="Enter task name..."
                                    value={newTaskName}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            addTask(project.id);
                                            setIsTaskFormVisible(false);
                                        }
                                    }}
                                    onChange={(e) => setNewTaskName(e.target.value)}
                                />
                                <button
                                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out flex items-center"
                                    onClick={() => {
                                        addTask(project.id);
                                        setIsTaskFormVisible(false);
                                    }}
                                >
                                    <svg
                                        className="w-4 h-4 mr-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>

                                </button>
                            </div>
                        )} {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Project;
