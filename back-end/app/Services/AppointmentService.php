<?php

namespace App\Services;

use App\Constants\ResponseMessages;
use App\Repositories\AppointmentRepository;
use App\Traits\ApiResponser;

class AppointmentService
{
  use ApiResponser;

  protected $appointmentRepository;

  public function __construct(AppointmentRepository $appointmentRepository)
  {
    $this->appointmentRepository = $appointmentRepository;
  }

  public function makeAppointment(array $appointment)
  {
    $finalData = $this->appointmentRepository->createAppointment($appointment);
    return $this->successResponse($finalData, ResponseMessages::APPOINTMENT_CREATED, 201);
  }
}
