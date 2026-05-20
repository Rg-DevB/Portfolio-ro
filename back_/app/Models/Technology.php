<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Technology extends Model
{
    //
    protected $table = "technologies";

    public $fillable = [    
        'name',
        'icon',
        'type'
      
    ];

    public function projects(): BelongsToMany
    {
        return $this->belongsToMany(Project::class, 'project_technology', 'project_id', 'technology_id');
    }
}
