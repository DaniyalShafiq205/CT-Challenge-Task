<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
   
    public function index()
    {
        // Retrieve projects along with their associated tasks
        $projects = Project::with(['tasks' => function ($query) {
            $query->orderBy('priority');
        }])->get();

        // Return JSON response
        return response()->json($projects);
    }
    
}
