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
        Schema::create('segmento', function (Blueprint $table) {
            $table->id('Id');
            $table->unsignedBigInteger('IdInstitucion');
            $table->string('Nombre',150);
            $table->string('Descripcion',500);
            $table->string('RutaImagen',250);
            $table->string('Estado',15)->default('ACT');
            $table->timestamps();
            $table->foreign('IdInstitucion')->references('Id')->on('institucion');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('segmento');
    }
};
