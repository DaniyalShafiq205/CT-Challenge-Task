<?php

namespace App\Http\Controllers\Api;

use App\Models\Task;
use App\Models\Project;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TaskController extends Controller
{
    public function reorder(Request $request)
    {
        $tasks = $request->input('tasks');
    
        // Extract the IDs and priorities of tasks from the request
        $taskPriorities = collect($tasks)->pluck('priority', 'id')->toArray();

        // Fetch all tasks at once from the database using their IDs and update priorities
        Task::whereIn('id', array_keys($taskPriorities))->get()->each(function ($task) use ($taskPriorities) {
            $task->priority = $taskPriorities[$task->id];
            $task->save();
        });
        $tasks = Task::whereIn('id', array_keys($taskPriorities))->get();
    
        return response()->json(['message' => 'Tasks reordered successfully']);
    }

    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'projectId' => 'required|exists:projects,id',
            'name' => 'required|string|max:255',
        ]);

        // Find the project by its ID
        $project = Project::findOrFail($validatedData['projectId']);

        // Find the maximum priority among the tasks associated with the project
        $maxPriority = $project->tasks()->max('priority');

        // Increment the maximum priority by 1
        $priority = $maxPriority + 1;

        // Create the new task with the calculated priority
        $task = new Task();
        $task->name = $validatedData['name'];
        $task->priority = $priority;
        // Assign the task to the project
        $project->tasks()->save($task);

        // Return a response indicating success
        return response()->json(['message' => 'Task created successfully', 'task' => $task], 201);
    }
}
