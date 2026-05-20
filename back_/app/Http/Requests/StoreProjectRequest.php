<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProjectRequest extends FormRequest
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
            'user_id' => 'nullable|exists:users,id',
            'name' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:projects,slug,' . $this->route('project'),
            'description' => 'nullable|string',
            'thumbnail' => 'nullable|string|max:255',
            'demo_url' => 'nullable|url|max:255',
            'github_url' => 'nullable|url|max:255',
            'featured' => 'boolean',
            'status' => 'required|string|max:255',
            'date' => 'nullable|date',
            'published_at' => 'nullable|date',
            'order' => 'integer',
        ];
    }
}
