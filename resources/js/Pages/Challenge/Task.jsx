// Task.jsx
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {

    return (
        <Draggable key={task.id} draggableId={`task-${task.id}`} index={index}>
            {(provided) => (
                <div
                    className="bg-gray-100 rounded-md p-3 cursor-pointer shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <p className="text-gray-800">{task.name}</p>
                </div>
            )}
        </Draggable>
    );
};

export default Task;
