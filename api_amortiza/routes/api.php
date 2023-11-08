<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RolController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\InstitucionController;
use App\Http\Controllers\PermisoController;
use App\Http\Controllers\SegmentoController;
use App\Http\Controllers\TasaController;
use App\Http\Controllers\CargoController;

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
    Route::prefix('permisos')->group(function(){
        Route::get('/',[PermisoController::class,'get']);
        Route::post('/',[PermisoController::class,'create']);
        Route::get('/{Id}',[PermisoController::class,'getById']);
        Route::put('/{Id}',[PermisoController::class,'update']);
        Route::delete('/{Id}',[PermisoController::class,'destroy']);
    });
    Route::prefix('segmentos')->group(function(){
        Route::get('/',[SegmentoController::class,'get']);
        Route::post('/',[SegmentoController::class,'create']);
        Route::get('/{Id}',[SegmentoController::class,'getById']);
        Route::put('/{Id}',[SegmentoController::class,'update']);
        Route::delete('/{Id}',[SegmentoController::class,'destroy']);
    });
    Route::prefix('tasas')->group(function(){
        Route::get('/',[TasaController::class,'get']);
        Route::post('/',[TasaController::class,'create']);
        Route::get('/{Id}',[TasaController::class,'getById']);
        Route::put('/{Id}',[TasaController::class,'update']);
        Route::delete('/{Id}',[TasaController::class,'destroy']);
    });
    Route::prefix('cargos')->group(function(){
        Route::get('/',[CargoController::class,'get']);
        Route::post('/',[CargoController::class,'create']);
        Route::get('/{Id}',[CargoController::class,'getById']);
        Route::put('/{Id}',[CargoController::class,'update']);
        Route::delete('/{Id}',[CargoController::class,'destroy']);
    });
});
