<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\v1\ProfilController as V1ProfilController;
use App\Http\Controllers\Api\v1\SkillController;
use App\Http\Controllers\Api\v1\ProjectController;
use App\Http\Controllers\Api\v1\CategoryController;
use App\Http\Controllers\Api\v1\TechnologyController;
use App\Http\Controllers\Api\v1\ExperienceController;
use App\Http\Controllers\Api\v1\EducationController;
use App\Http\Controllers\Api\v1\ContactController;
use App\Http\Controllers\Api\v1\SocialController;
use App\Http\Controllers\Api\v1\SettingController;
use App\Http\Controllers\Api\v1\UserController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// --------------------------------- VERSIONING ---------------------------------

Route::prefix('v1')->group(function () {

    Route::apiResource('profils', V1ProfilController::class);
    Route::apiResource('skills', SkillController::class);
    Route::apiResource('projects', ProjectController::class);
    Route::apiResource('categories', CategoryController::class);
    Route::apiResource('technologies', TechnologyController::class);
    Route::apiResource('experiences', ExperienceController::class);
    Route::apiResource('education', EducationController::class);
    // Route::apiResource('languages', LanguageController::class); // Model not found
    // Route::apiResource('interests', InterestController::class); // Model not found
    Route::apiResource('references', ContactController::class); // 'references' maps to Contact model
    Route::apiResource('socials', SocialController::class);
    Route::apiResource('settings', SettingController::class);
    Route::apiResource('users', UserController::class);

});


// --------------------------------- END VERSIONING ---------------------------------
