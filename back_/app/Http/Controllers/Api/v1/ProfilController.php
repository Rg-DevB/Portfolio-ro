<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Profil;
use App\Http\Resources\ProfilResource;
use App\Http\Requests\StorepProfilRequest;

class ProfilController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $profils = Profil::all();

        return ProfilResource::collection($profils);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorepProfilRequest $request)
    {
        //
        $profils = Profil::create($request->validated());

        return new ProfilResource($profils);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $profils = Profil::findOrFail($id);

        return new ProfilResource($profils);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StorepProfilRequest $request, string $id)
    {
        //
        $profils = Profil::findOrFail($id);

        $profils->update($request->validated());

        return new ProfilResource($profils);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $profils = Profil::findOrFail($id);

        $profils->delete();

        return response()->json([
            'message' => 'Profil deleted successfully',
        ]);
    }
}
