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
        Schema::create('cargo', function (Blueprint $table) {
            $table->id('Id');
            $table->unsignedBigInteger('IdInstitucion');
            $table->string('Nombre',150);
            $table->string('Descripcion',300)->nullabe();
            $table->string('FormaPago',50);
            $table->string('Base',50);
            $table->decimal('Valor',$precision=14,$scale=2)->nullable();
            $table->decimal('Porcentaje',$precision=8,$scale=4)->nullable();
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
        Schema::dropIfExists('cargo');
    }
};
