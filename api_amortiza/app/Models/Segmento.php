<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Segmento extends Model
{
    use HasFactory;
    protected $table = "segmento";
    protected $primaryKey='Id';
    protected $fillable=['IdInstitucion','Nombre','Descripcion','RutaImagen','Estado'];
}
