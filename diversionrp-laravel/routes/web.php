<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::view('/', 'welcome', ['page' => 'home']);
Route::view('/contact', 'welcome', ['page' => 'contact']);
Route::post('/contact', [ContactController::class, 'send']);
Route::view('/rules', 'welcome', ['page' => 'rules']);
Route::view('/streams', 'welcome', ['page' => 'streams']);
Route::view('/showcase', 'welcome', ['page' => 'showcase']);
Route::view('/support', 'welcome', ['page' => 'support']);
