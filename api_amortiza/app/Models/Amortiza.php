<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Amortiza extends Model
{
    use HasFactory;
 
    protected $fillable=[
        'IdTasa',
        'Monto',
        'Plazo',
        'Sistema'
      ];
}
