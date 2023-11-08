<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RolController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\InstitucionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




Route::post('auth/register',[AuthController::class,'create']);
Route::post('auth/login',[AuthController::class,'login']);

Route::middleware(['auth:sanctum'])->group(function(){
    Route::prefix('roles')->group(function(){
        Route::get('/',[RolController::class,'index']);
        Route::post('/',[RolController::class,'store']);
        Route::get('/{Id}',[RolController::class,'getById']);
        Route::put('/{Id}',[RolController::class,'update']);
        Route::delete('/{Id}',[RolController::class,'destroy']);
    });
    Route::post('auth/logout',[AuthController::class,'logout']);
    Route::prefix('instituciones')->group(function(){
        Route::get('/',[InstitucionController::class,'get']);
        Route::post('/',[InstitucionController::class,'create']);
        Route::get('/{Id}',[InstitucionController::class,'getById']);
        Route::put('/{Id}',[InstitucionController::class,'update']);
        Route::delete('/{Id}',[InstitucionController::class,'destroy']);
    });
});
