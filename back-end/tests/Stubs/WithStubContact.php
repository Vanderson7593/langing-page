<?php

namespace Tests\Stubs;

use App\Constants\Contact as ConstantsContact;
use App\Models\Contact;

trait WithStubContact
{
    /**
     * @var \App\Contact
     */
    protected $contact;

    protected $faker;

    public function createStubContact(array $data = [])
    {
        $data = array_merge([
            ConstantsContact::FIRST_NAME => 'any_name',
            ConstantsContact::EMAIL => 'test-user-' . uniqid() . '@example.com',
            ConstantsContact::COMMENT => 'any_comment',
            ConstantsContact::IS_READED => false,
        ], $data);

        return $this->contact = Contact::create($data);
    }

    public function deleteStubContact()
    {
        $this->contact->forceDelete();
    }
}
