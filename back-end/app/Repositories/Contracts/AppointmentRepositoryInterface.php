<?php

namespace App\Repositories\Contracts;

interface AppointmentRepositoryInterface
{
  public function createAppointment(array $appointment);
}
