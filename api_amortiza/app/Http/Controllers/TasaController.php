<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tasa;
use App\Models\Cargo;
use App\Models\Aplicacioncargo;

class TasaController extends Controller
{
    public function getByInstitucion($idInstitucion)
    {
        $data=Tasa::select('tasa.*','segmento.Nombre as Segmento','institucion.Nombre  as Institucion')
        ->join('segmento','tasa.IdSegmento','=','segmento.Id')
        ->join('institucion','segmento.IdInstitucion','=','institucion.Id')
        ->where('institucion.Id','=',$idInstitucion)
        ->get();
        return response()->json($data);
    }
    public function get()
    {
        $data=Tasa::select('tasa.*','segmento.Nombre as Segmento','institucion.Nombre  as Institucion')
        ->join('segmento','tasa.IdSegmento','=','segmento.Id')
        ->join('institucion','segmento.IdInstitucion','=','institucion.Id')
        ->get();
        return response()->json($data);
    }
    public function create(Request $request)
    {

        $tasa=new Tasa($request->input());
        $tasa->save();

        $idSegmento=$request->input('IdSegmento');
        $cargos=Cargo::select('cargo.Id')
        ->join('segmento','cargo.IdInstitucion','=','segmento.IdInstitucion')
        ->where('segmento.Id','=',$idSegmento)
        ->get();
        if(count($cargos)>0){
            foreach ($cargos as $cargo) {
                $aplicacioncargo=new Aplicacioncargo();
                $aplicacioncargo->IdTasa=$tasa->Id;
                $aplicacioncargo->IdCargo=$cargo->Id;
                $aplicacioncargo->Estado='ELI';
                $aplicacioncargo->save();
            }
        }  

        return response()->json([
            'estado'=>true,
            'mensaje'=>'Registro creado Satisfactoriamente'
        ],200);
    }
    public function getById($id){
        try {
            $data=Tasa::select('tasa.*','segmento.Nombre as Segmento','institucion.Nombre as Institucion')
                ->join('segmento','tasa.IdSegmento','=','segmento.Id')
                ->join('institucion','segmento.IdInstitucion','=','institucion.Id')
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
