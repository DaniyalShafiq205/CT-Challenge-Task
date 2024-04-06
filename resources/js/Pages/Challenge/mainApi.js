
import axios from "axios";
const fetchProjectsData = async (setProjects) => {
    try {
        const response = await axios.get("/projects");
        console.log(response);
        setProjects(response.data);
    } catch (error) {
        console.error("Error fetching projects:", error);
    }
};
const onDrag = (result, projects, setProjects) => {
    if (!result.destination) {
        return;
    }

    const { source, destination } = result;

    // Get the project ID from the droppableId
    const projectId = source.droppableId.replace("project-", "");

    // Find the project in the projects array
    const updatedProjects = projects.map((project) => {
        if (project.id === parseInt(projectId)) {
            // Clone the tasks array to prevent mutating state directly
            const tasks = [...project.tasks];

            // Remove the dragged task from its original position
            const [draggedTask] = tasks.splice(source.index, 1);

            // Insert the dragged task into its new position
            tasks.splice(destination.index, 0, draggedTask);

            // Update the priority of each task within the project
            tasks.forEach((task, index) => {
                task.priority = index + 1;
            });

            // Save the updated tasks array to the project
            project.tasks = tasks;
        }
        return project;
    });

    // Update the state with the updated projects array
    setProjects(updatedProjects);

    // Send backend request to save the updated order
    const updatedTasks = updatedProjects
        .find((project) => project.id === parseInt(projectId))
        .tasks.map((task) => ({ id: task.id, priority: task.priority }));
    console.log(updatedTasks);
    sendReorderRequest(updatedTasks);
};

const sendReorderRequest = (updatedTasks) => {
    axios
        .patch("/tasks/reorder", { tasks: updatedTasks })
        .then((response) => {
            // Handle successful response
            console.log(response.data.message);
        })
        .catch((error) => {
            // Handle error
            console.error("Error:", error);
        });
};

export { fetchProjectsData, onDrag, sendReorderRequest };