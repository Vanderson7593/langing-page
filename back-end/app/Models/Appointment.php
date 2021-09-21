<?php

namespace App\Models;

use App\Constants\Appointment as ConstantsAppointment;
use App\Constants\Model as ModelConstants;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Appointment extends Model
{

    use HasFactory;

    protected $fillable = [
        ConstantsAppointment::NAME,
        ConstantsAppointment::EMAIL,
        ConstantsAppointment::SERVICE,
        ConstantsAppointment::PHONE_NUMBER,
        ConstantsAppointment::DATE,
        ConstantsAppointment::TIME,
        ConstantsAppointment::NOTES,
    ];

    protected $guarded = [ModelConstants::ID];
}
