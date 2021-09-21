<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\ContactService;
use Illuminate\Http\Request;

class ContactController extends Controller
{

  protected $contactService;

  public function __construct(ContactService $contactService)
  {
    $this->contactService = $contactService;
  }

  public function create(Request $request)
  {
    return $this->contactService->makeContact();
  }
}
