<?php

namespace App\Repositories;

use App\Repositories\Contracts\ContactRepositoryInterface;
use App\Models\Contact;

class ContactRepository implements ContactRepositoryInterface
{
  protected $entity;

  public function __construct(Contact $contact)
  {
    $this->entity = $contact;
  }

  /**
   * Create new Contact
   * @param array $contact
   * @return object
   */
  public function createContact(array $contact)
  {
    return $this->entity->create($contact);
  }
}
