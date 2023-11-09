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
        Schema::create('tasa', function (Blueprint $table) {
            $table->id('Id');
            $table->unsignedBigInteger('IdSegmento');
            $table->string('Detalle',150);
            $table->string('Observacion',300)->nullable();
            $table->decimal('TasaNominal',$precision=8,$scale=4);
            $table->decimal('TasaEfectiva',$precision=8,$scale=4);
            $table->integer('PlazoMinimo')->nullable();
            $table->integer('PlazoMaximo')->nullable();
            $table->decimal('MontoMinimo',$precision=14,$scale=2)->nullable();
            $table->decimal('MontoMaximo',$precision=14,$scale=2)->nullable();
            $table->string('Estado',15)->default('ACT');
            $table->timestamps();
            $table->foreign('IdSegmento')->references('Id')->on('segmento');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasa');
    }
};
