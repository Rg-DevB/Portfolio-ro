<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Skill;
use App\Http\Resources\SkillResource;
use App\Http\Requests\StoreSkillRequest;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $skills = Skill::all();
        return SkillResource::collection($skills);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSkillRequest $request)
    {
        $skill = Skill::create($request->validated());
        return new SkillResource($skill);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $skill = Skill::findOrFail($id);
        return new SkillResource($skill);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreSkillRequest $request, string $id)
    {
        $skill = Skill::findOrFail($id);
        $skill->update($request->validated());
        return new SkillResource($skill);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $skill = Skill::findOrFail($id);
        $skill->delete();
        return response()->json([
            'message' => 'Skill deleted successfully',
        ]);
    }
}
