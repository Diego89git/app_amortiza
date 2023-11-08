<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cargo extends Model
{
    use HasFactory;
    protected $table = "cargo";
    protected $primaryKey='Id';
    protected $fillable=[
        'IdInstitucion',
        'Nombre',
        'Descripcion',
        'FormaPago',
        'Base',
        'Valor',
        'Porcentaje',
        'Estado'];
}
