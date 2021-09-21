<?php

namespace App\Services;

use App\Constants\ResponseMessages;
use App\Repositories\AppointmentRepository;
use App\Traits\ApiResponser;
use App\Validators\AppointmentValidator;

class AppointmentService
{
  use ApiResponser;

  protected $appointmentRepository;

  public function __construct(AppointmentRepository $appointmentRepository)
  {
    $this->appointmentRepository = $appointmentRepository;
  }

  public function makeAppointment()
  {
    $validator = AppointmentValidator::validateAppointment();

    if ($validator->fails()) {
      return $this->errorResponse($validator->errors(), 422);
    }

    $finalData = $this->appointmentRepository->createAppointment($validator->validated());
    return $this->successResponse($finalData, ResponseMessages::APPOINTMENT_CREATED, 201);
  }
}
