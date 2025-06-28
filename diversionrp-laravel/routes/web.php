<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'welcome', ['page' => 'home']);
Route::view('/contact', 'welcome', ['page' => 'contact']);
Route::view('/rules', 'welcome', ['page' => 'rules']);
Route::view('/streams', 'welcome', ['page' => 'streams']);
Route::view('/showcase', 'welcome', ['page' => 'showcase']);
Route::view('/support', 'welcome', ['page' => 'support']);
