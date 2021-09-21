<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\ContactService;
use App\Validators\ContactValidator;

class ContactController extends Controller
{
  protected $contactService;

  public function __construct(ContactService $contactService)
  {
    $this->contactService = $contactService;
  }

  public function create()
  {
    $validator = ContactValidator::validateContact();

    if ($validator->fails()) {
      return $this->errorResponse($validator->errors(), 422);
    }

    return $this->contactService->makeContact($validator->validated());
  }
}
