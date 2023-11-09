<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Segmento;

class SegmentoController extends Controller
{
    public function get()
    {
        $data=Segmento::select('segmento.*','institucion.Nombre as Institucion')
        ->join('institucion','segmento.IdInstitucion','=','institucion.Id')
        ->get();
        return response()->json($data);
    }
    public function create(Request $request)
    {

        $segmento=new Segmento($request->input());
        $segmento->save();
        return response()->json([
            'estado'=>true,
            'mensaje'=>'Registro creado Satisfactoriamente'
        ],200);
    }
    public function getById($id){
        try {
            $data=Segmento::select('segmento.*','institucion.Nombre as Institucion')
                ->join('institucion','segmento.IdInstitucion','=','institucion.Id')
                ->where('segmento.Id','=',$id)
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
            Segmento::find($Id)->update($request->input());
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
            Segmento::find($Id)->delete();
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
