<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Technology;
use App\Http\Resources\TechnologyResource;
use App\Http\Requests\StoreTechnologyRequest;

class TechnologyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $technologies = Technology::all();
        return TechnologyResource::collection($technologies);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTechnologyRequest $request)
    {
        $technology = Technology::create($request->validated());
        return new TechnologyResource($technology);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $technology = Technology::findOrFail($id);
        return new TechnologyResource($technology);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreTechnologyRequest $request, string $id)
    {
        $technology = Technology::findOrFail($id);
        $technology->update($request->validated());
        return new TechnologyResource($technology);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $technology = Technology::findOrFail($id);
        $technology->delete();
        return response()->json([
            'message' => 'Technology deleted successfully',
        ]);
    }
}
