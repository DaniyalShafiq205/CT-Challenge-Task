// MainComponent.js
import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Project from './Project';

import { fetchProjectsData, onDrag, sendReorderRequest } from './mainApi.js';
function MainComponent() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetchProjects(setProjects);
    }, []);

    const fetchProjects = async () => {
        fetchProjectsData(setProjects)
    };
    const onDragEnd = (result) => {
        onDrag(result, projects, setProjects);
    };
    
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {projects.map((project) => (
                    <Project
                        key={project.id}
                        project={project}
                        fetchProjects={fetchProjects}
                    />
                ))}
            </div>
        </DragDropContext>
    );
}

export default MainComponent;
