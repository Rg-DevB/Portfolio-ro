<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;
use App\Http\Resources\ContactResource;
use App\Http\Requests\StoreContactRequest;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contact::all();
        return ContactResource::collection($contacts);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactRequest $request)
    {
        $contact = Contact::create($request->validated());
        return new ContactResource($contact);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $contact = Contact::findOrFail($id);
        return new ContactResource($contact);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreContactRequest $request, string $id)
    {
        $contact = Contact::findOrFail($id);
        $contact->update($request->validated());
        return new ContactResource($contact);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $contact = Contact::findOrFail($id);
        $contact->delete();
        return response()->json([
            'message' => 'Contact deleted successfully',
        ]);
    }
}
