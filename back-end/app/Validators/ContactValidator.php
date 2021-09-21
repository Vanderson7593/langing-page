<?php

namespace App\Validators;

use App\Constants\Contact;
use Illuminate\Support\Facades\Validator;

class ContactValidator
{

  static function validateContact()
  {
    return Validator::make(request()->all(), [
      Contact::FIRST_NAME => 'required|max:20|string',
      Contact::EMAIL => 'required|email|max:50',
      Contact::COMMENT => 'required|string'
    ]);
  }
}
