<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Education;
use App\Http\Resources\EducationResource;
use App\Http\Requests\StoreEducationRequest;

class EducationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $educations = Education::all();
        return EducationResource::collection($educations);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEducationRequest $request)
    {
        $educations = Education::create($request->validated());
        return new EducationResource($educations);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $educations = Education::findOrFail($id);
        return new EducationResource($educations);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreEducationRequest $request, string $id)
    {
        $educations = Education::findOrFail($id);
        $educations->update($request->validated());
        return new EducationResource($educations);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $educations = Education::findOrFail($id);
        $educations->delete();
        return response()->json([
            'message' => 'Education deleted successfully',
        ]);
    }
}
