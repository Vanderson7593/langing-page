<?php

namespace Tests;

use Illuminate\Foundation\Testing\WithFaker;

abstract class StubCase
{
  use WithFaker;

  public function __construct()
  {
    $this->setUpFaker();
  }
}
