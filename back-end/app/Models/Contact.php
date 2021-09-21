<?php

namespace App\Models;

use App\Constants\Contact as ConstantsContact;
use App\Constants\Model as ModelConstants;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Contact extends Model
{

    use HasFactory;

    protected $fillable = [
        ModelConstants::ID,
        ConstantsContact::FIRST_NAME,
        ConstantsContact::EMAIL,
        ConstantsContact::COMMENT,
        ConstantsContact::IS_READED,
    ];

    protected $attributes = [
        ConstantsContact::IS_READED => false
    ];

    protected $guarded = [ModelConstants::ID];
}
