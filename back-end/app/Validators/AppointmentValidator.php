<?php

namespace App\Validators;

use App\Constants\Appointment;
use Illuminate\Support\Facades\Validator;

class AppointmentValidator
{

  static function validateAppointment()
  {
    return Validator::make(request()->all(), [
      Appointment::NAME => 'required|max:20|string',
      Appointment::EMAIL => 'required|email|max:50',
      Appointment::SERVICE => 'required|string',
      Appointment::PHONE_NUMBER => 'required|string',
      Appointment::DATE => 'required|date',
      Appointment::TIME => 'required|string',
      Appointment::NOTES => 'required|string',
    ]);
  }
}
