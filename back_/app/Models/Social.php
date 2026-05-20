<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Social extends Model
{
    //
    protected $table = 'socials';

    protected $fillable = [
        "platform",
        "url",
        "icon",
        "order",
    ];
}
