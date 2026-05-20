<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Experience extends Model
{
    protected $table = "experiences";
    protected $fillable = [
        "name",
        "user_id",
        'company',
        'role',
        'description',
        'start_date',
        'end_date',
        'current',
        'location',
    ];
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
