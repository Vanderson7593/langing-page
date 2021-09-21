<?php

use App\Http\Controllers\{
  ContactController,
  AppointmentController
};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/contacts', [ContactController::class, 'create']);

Route::post('/appointments', [AppointmentController::class, 'create']);
