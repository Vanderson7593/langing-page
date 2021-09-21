<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Contracts\{
    ContactRepositoryInterface,
    AppointmentRepositoryInterface
};
use App\Repositories\{
    ContactRepository,
    AppointmentRepository
};

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            ContactRepositoryInterface::class,
            ContactRepository::class,
        );
        $this->app->bind(
            AppointmentRepositoryInterface::class,
            AppointmentRepository::class,
        );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
