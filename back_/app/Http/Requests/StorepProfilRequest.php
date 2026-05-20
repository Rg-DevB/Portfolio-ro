<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorepProfilRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //

            "full_name" => 'required|string|max:255',
            "title" => 'required|string|max:255',
            "description" => 'nullable|string|max:255',
            "photo" => 'nullable|string|max:255',
            "email" => 'nullable|string|max:255',
            "phone" => 'nullable|string|max:255',
            "location" => 'nullable|string|max:255',
            "cv_url" => 'nullable|string|max:255',
            "social_links" => 'nullable|json',
        ];

    }

}
