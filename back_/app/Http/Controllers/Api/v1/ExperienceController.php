<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Experience;
use App\Http\Resources\ExperienceResource;
use App\Http\Requests\StoreExperienceRequest;

class ExperienceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $experiences = Experience::all();
        return ExperienceResource::collection($experiences);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreExperienceRequest $request)
    {
        $experience = Experience::create($request->validated());
        return new ExperienceResource($experience);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $experience = Experience::findOrFail($id);
        return new ExperienceResource($experience);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreExperienceRequest $request, string $id)
    {
        $experience = Experience::findOrFail($id);
        $experience->update($request->validated());
        return new ExperienceResource($experience);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $experience = Experience::findOrFail($id);
        $experience->delete();
        return response()->json([
            'message' => 'Experience deleted successfully',
        ]);
    }
}
