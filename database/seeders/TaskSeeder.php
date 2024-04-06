<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = DB::table('projects')->pluck('id');

        foreach ($projects as $projectId) {
            for ($i = 1; $i <= 3; $i++) {
                DB::table('tasks')->insert([
                    'name' => "Task $i for Project $projectId",
                    'project_id' => $projectId,
                    'priority' => $i,
                    'created_at' => now(),
                    'updated_at' => now()
                ]);
            }
        }
    }
}
