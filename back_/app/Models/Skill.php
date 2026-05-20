<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Skill extends Model
{
    protected $table = 'skills';
    protected $fillable = [
        'user_id',
        'name',
        'icon',
        'level',
        'type',
        'order',
    ];

    public function profil(): BelongsTo
    {
        return $this->belongsTo(Profil::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
