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
        Schema::create('institucion', function (Blueprint $table) {
            $table->id('Id');
            $table->string('Nombre',100);
            $table->string('RutaLogo',250)->nullable();
            $table->string('Observacion',300)->nullable();
            $table->string('Direccion',250)->nullable();
            $table->string('PaginaWeb',100)->nullable();
            $table->string('Correo',50)->nullable();
            $table->string('Telefono',25)->nullable();
            $table->string('Celular')->nullable();
            $table->boolean('Habilitado')->default(false);
            $table->string('Estado',15)->default('ACT');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('institucion');
    }
};
