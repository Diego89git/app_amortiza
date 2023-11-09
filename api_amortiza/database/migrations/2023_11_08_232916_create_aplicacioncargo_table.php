<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('aplicacioncargo', function (Blueprint $table) {
            $table->id('Id');
            $table->unsignedBigInteger('IdTasa');
            $table->unsignedBigInteger('IdCargo');
            $table->string('Estado',15)->default('ACT');
            $table->timestamps();
            $table->foreign('IdTasa')->references('Id')->on('tasa');
            $table->foreign('IdCargo')->references('Id')->on('cargo');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('aplicacioncargo');
    }
};
