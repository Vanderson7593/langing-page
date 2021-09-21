<?php

namespace App\Services;

use App\Constants\ResponseMessages;
use App\Repositories\Contracts\ContactRepositoryInterface;
use App\Traits\ApiResponser;

class ContactService
{
  use ApiResponser;

  protected $contactRepository;

  public function __construct(ContactRepositoryInterface $contactRepository)
  {
    $this->contactRepository = $contactRepository;
  }

  public function makeContact(array $contact)
  {
    $finalData = $this->contactRepository->createContact($contact);
    return $this->successResponse($finalData, ResponseMessages::CONTACT_CREATED, 201);
  }
}
