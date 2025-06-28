<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'welcome', ['page' => 'home']);
Route::view('/contact', 'welcome', ['page' => 'contact']);
