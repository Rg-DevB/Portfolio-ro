<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'title' => $this->title,
            'slug' => $this->slug,
            'description' => $this->description,
            'thumbnail' => $this->thumbnail,
            'demo_url' => $this->demo_url,
            'github_url' => $this->github_url,
            'featured' => $this->featured,
            'status' => $this->status,
            'date' => $this->date,
            'published_at' => $this->published_at,
            'categories' => CategoryResource::collection($this->whenLoaded('categories')),
            'technologies' => TechnologyResource::collection($this->whenLoaded('technologies')),
            'order' => $this->order,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
