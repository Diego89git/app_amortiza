<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\AmortizacionService;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(AmortizacionService::class, function($app){
            return new AmortizacionService();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
