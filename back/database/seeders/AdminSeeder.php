<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'email' => 'admin@by.ru',
            'is_admin' => '1',
            'id' => '11111'
        ]);
        DB::table('employees')->insert([
            'user_id' => '11111',
            'name' => 'Admin',
            'position' => 'Администратор',
        ]);
    }
}
