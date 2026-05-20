<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Social;
use App\Http\Resources\SocialResource;
use App\Http\Requests\StoreSocialRequest;

class SocialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $socials = Social::all();
        return SocialResource::collection($socials);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSocialRequest $request)
    {
        $social = Social::create($request->validated());
        return new SocialResource($social);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $social = Social::findOrFail($id);
        return new SocialResource($social);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreSocialRequest $request, string $id)
    {
        $social = Social::findOrFail($id);
        $social->update($request->validated());
        return new SocialResource($social);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $social = Social::findOrFail($id);
        $social->delete();
        return response()->json([
            'message' => 'Social deleted successfully',
        ]);
    }
}
