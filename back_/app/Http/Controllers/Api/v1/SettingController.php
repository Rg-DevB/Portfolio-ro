<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Setting;
use App\Http\Resources\SettingResource;
use App\Http\Requests\StoreSettingRequest;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $settings = Setting::all();
        return SettingResource::collection($settings);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSettingRequest $request)
    {
        $setting = Setting::create($request->validated());
        return new SettingResource($setting);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $setting = Setting::findOrFail($id);
        return new SettingResource($setting);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreSettingRequest $request, string $id)
    {
        $setting = Setting::findOrFail($id);
        $setting->update($request->validated());
        return new SettingResource($setting);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $setting = Setting::findOrFail($id);
        $setting->delete();
        return response()->json([
            'message' => 'Setting deleted successfully',
        ]);
    }
}
