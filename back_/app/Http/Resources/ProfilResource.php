<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProfilResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [

            'full_name' => $this->full_name,
            'title' => $this->title,
            'description' => $this->description,
            'photo' => $this->photo,
            'email' => $this->email,
            'phone' => $this->phone,
            'location' => $this->location,
            'cv_url' => $this->cv_url,
            'social_links' => $this->social_links,
        ];  
    }
}
