<?php

namespace App\Services;

use App\Constants\ResponseMessages;
use App\Repositories\Contracts\ContactRepositoryInterface;
use App\Traits\ApiResponser;
use App\Validators\ContactValidator;

class ContactService
{
  use ApiResponser;

  protected $contactRepository;

  public function __construct(ContactRepositoryInterface $contactRepository)
  {
    $this->contactRepository = $contactRepository;
  }

  public function makeContact()
  {
    $validator = ContactValidator::validateContact();

    if ($validator->fails()) {
      return $this->errorResponse($validator->errors(), 422);
    }

    $finalData = $this->contactRepository->createContact($validator->validated());
    return $this->successResponse($finalData, ResponseMessages::CONTACT_CREATED, 201);
  }
}
