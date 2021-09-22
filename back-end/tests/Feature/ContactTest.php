<?php

namespace Tests\Feature;

use App\Constants\Contact;
use Tests\TestCase;
use Tests\Stubs\WithStubContact;

class ContactTest extends TestCase
{
    use WithStubContact;
    protected $route = 'api/contacts';


    public function makeContact(): array
    {
        return [
            Contact::FIRST_NAME => 'any_name',
            Contact::EMAIL => 'test-user@example.com',
            Contact::COMMENT => 'any_comment',
            Contact::IS_READED => false,
        ];
    }

    /**
     * Create Contact test
     *
     * @return void
     */
    public function test_create_contact()
    {
        $this->post($this->route, $this->makeContact())
            ->assertStatus(201)
            ->assertJson([
                'status' => 'success',
                'message' => 'Contact created',
                'data' => $this->makeContact()
            ]);
    }
}
