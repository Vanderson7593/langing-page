<?php

namespace App\Repositories;

use App\Repositories\Contracts\AppointmentRepositoryInterface;
use App\Models\Appointment;

class AppointmentRepository implements AppointmentRepositoryInterface
{
  protected $entity;

  public function __construct(Appointment $appointment)
  {
    $this->entity = $appointment;
  }

  /**
   * Create new Appointment
   * @param array $Appointment
   * @return object
   */
  public function createAppointment(array $appointment)
  {
    return $this->entity->create($appointment);
  }
}
