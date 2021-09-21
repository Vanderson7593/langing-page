<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\AppointmentService;
use App\Validators\AppointmentValidator;

class AppointmentController extends Controller
{

  protected $appointmentService;

  public function __construct(AppointmentService $appointmentService)
  {
    $this->appointmentService = $appointmentService;
  }

  public function create()
  {
    $validator = AppointmentValidator::validateAppointment();

    if ($validator->fails()) {
      return $this->errorResponse($validator->errors(), 422);
    }
    return $this->appointmentService->makeAppointment($validator->validated());
  }
}
