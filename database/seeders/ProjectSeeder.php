<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('projects')->insert([
            ['name' => 'Superior Website'],
            ['name' => 'Revolutionary App'],
            ['name' => 'Cutting-Edge AI ']
        ]);
    }
}
