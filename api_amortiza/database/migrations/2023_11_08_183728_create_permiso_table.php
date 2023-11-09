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
        Schema::create('permiso', function (Blueprint $table) {
            $table->id('Id');
            $table->unsignedBigInteger('IdUser');
            $table->unsignedBigInteger('IdInstitucion');
            $table->unsignedBigInteger('IdRol');
            $table->string('Estado',15)->default('ACT');
            $table->timestamps();
            $table->foreign('IdUser')->references('id')->on('users');
            $table->foreign('IdInstitucion')->references('Id')->on('institucion');
            $table->foreign('IdRol')->references('Id')->on('rol');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('permiso');
    }
};
