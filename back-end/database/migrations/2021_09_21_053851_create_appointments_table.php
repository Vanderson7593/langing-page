<?php

use App\Constants\Appointment;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->string(Appointment::NAME, 20);
            $table->string(Appointment::EMAIL, 50);
            $table->string(Appointment::SERVICE, 30);
            $table->string(Appointment::PHONE_NUMBER, 15);
            $table->date(Appointment::DATE);
            $table->time(Appointment::TIME);
            $table->text(Appointment::NOTES);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appointments');
    }
}
