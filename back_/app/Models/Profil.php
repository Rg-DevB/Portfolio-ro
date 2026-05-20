<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Profil extends Model
{
    //
    protected $table = 'profils';

    protected $fillable = [

        "full_name",
        "title",
        "description",
        "photo",
        "phone",
        "email",
        "location",
        "cv_url",
        "social_links",
    ];

    protected $casts = [ 'social_links' => 'array', ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function projects(): HasMany
    {
        return $this->hasMany(Project::class);
    }
    public function experiences(): HasMany
    {
        return $this->hasMany(Experience::class);
    }
    public function skills(): HasMany
    {
        return $this->hasMany(Skill::class);
    }
    public function projects_count(): int
    {
        return $this->hasMany(Project::class)->count();
    }
    public function experiences_count(): int
    {
        return $this->hasMany(Experience::class)->count();
    }
    public function skills_count(): int
    {
        return $this->hasMany(Skill::class)->count();
    }


}
