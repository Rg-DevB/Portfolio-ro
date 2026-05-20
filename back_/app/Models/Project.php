<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Project extends Model
{
    protected $table = "projects";
    protected $fillable = [


        "user_id",
        "name",
        'title',
        'slug',
        'description',
        'thumbnail',
        'demo_url',
        'github_url',
        'featured',
        'status',
        'date',
        'published_at',
        'order',

    ];

    protected $casts = [
        'featured' => 'boolean',
        'status' => 'string',
        'date' => 'date',
        'published_at' => 'datetime',
        'order' => 'integer',
    ];

    public function category(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, 'category_project', 'project_id', 'category_id');
    }

    public function technology(): BelongsToMany
    {
        return $this->belongsToMany(Technology::class, 'project_technology', 'project_id', 'technology_id');
    }

    public function profil(): BelongsTo
    {
        return $this->belongsTo(Profil::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function skills(): belongsToMany
    {
        return $this->belongsToMany(Skill::class);
    }

    public function projects_count(): int
    {
        return $this->hasMany(Project::class)->count();
    }

    public function skills_count(): int
    {
        return $this->belongsToMany(Skill::class)->count();
    }


}
