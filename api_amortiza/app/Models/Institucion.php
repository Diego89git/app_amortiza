<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Institucion extends Model
{
    use HasFactory;
    protected $table = "institucion";
    protected $primaryKey='Id';
    protected $fillable=[
        'Nombre',
        'RutaLogo',
        'Observacion',
        'Direccion',
        'PaginaWeb',
        'Correo',
        'Telefono',
        'Celular',
        'Habilitado',
        'Estado'];
}
