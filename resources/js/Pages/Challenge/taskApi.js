// taskApi.js

import axios from "axios";

const handleAddTask = (
    projectId,
    newTaskName,
    setNewTaskName,
    fetchProjects
) => {
    if (!newTaskName.trim()) {
        return; // Do nothing if task name is empty or whitespace only
    }

    // Send API request to add the new task
    axios
        .post("/tasks", {
            projectId: projectId,
            name: newTaskName,
        })
        .then((response) => {
            // Handle successful response
            console.log("New task added:", response.data);
            // Clear the input field after adding the task
            setNewTaskName("");
            // Fetch updated project data after adding the task
            fetchProjects();
        })
        .catch((error) => {
            // Handle error
            console.error("Error adding task:", error);
        });
};

export { handleAddTask };
