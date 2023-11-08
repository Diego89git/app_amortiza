<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tasa;

class TasaController extends Controller
{
    public function get()
    {
        $data=Tasa::select('tasa.*','segmento.Nombre as Segmento')
        ->join('segmento','tasa.IdSegmento','=','segmento.Id')
        ->get();
        return response()->json($data);
    }
    public function create(Request $request)
    {

        $tasa=new Tasa($request->input());
        $tasa->save();
        return response()->json([
            'estado'=>true,
            'mensaje'=>'Registro creado Satisfactoriamente'
        ],200);
    }
    public function getById($id){
        try {
            $data=Tasa::select('tasa.*','segmento.Nombre as Segmento')
                ->join('segmento','tasa.IdSegmento','=','segmento.Id')
                ->where('tasa.Id','=',$id)
                ->get();
            return response()->json([
                'estado'=>true,
                'dato'=>$data
            ],200);
        } catch (\Throwable $th) {
            return response()->json([
                'estado'=>false,
                'mensaje'=>$th->getMessage()
            ],500);
        }
    }
    public function update(Request $request, $Id)
    {
        try {
            Tasa::find($Id)->update($request->input());
        return response()->json([
            'estado'=>true,
            'mensaje'=>'Registro actualizado Satisfactoriamente'
        ],200);
        } catch (\Throwable $th) {
            return response()->json([
                'estado'=>false,
                'mensaje'=>$th->getMessage()
            ],500);
        }
        
    }
    public function destroy($Id)
    {
        try {
            Tasa::find($Id)->delete();
            return response()->json([
                    'estado'=>true,
                    'mensaje'=>'Registro eliminado satisfactoriamente'
                ],200);
        } catch (\Throwable $th) {
            return response()->json([
                'estado'=>false,
                'mensaje'=>$th->getMessage()
                ],500);
        }
       
    }
}
