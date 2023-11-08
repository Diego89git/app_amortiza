<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aplicacioncargo extends Model
{
    use HasFactory;
    protected $table = "aplicacioncargo";
    protected $primaryKey='Id';
    protected $fillable=[
        'IdTasa',
        'IdCargo',
        'Estado'];
}
