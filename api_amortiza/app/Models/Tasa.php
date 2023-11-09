<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tasa extends Model
{
    use HasFactory;
    protected $table = "tasa";
    protected $primaryKey='Id';
    protected $fillable=[
        'IdSegmento',
        'Detalle',
        'Observacion',
        'TasaNominal',
        'TasaEfectiva',
        'PlazoMinimo',
        'PlazoMaximo',
        'MontoMinimo',
        'MontoMaximo',
        'Estado'];
}
