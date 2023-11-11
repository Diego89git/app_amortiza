<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cargo;
use App\Models\Tasa;
use App\Models\Aplicacioncargo;


class CargoController extends Controller
{
    public function getByInstitucion($idInstitucion)
    {
        $data=Cargo::select('cargo.*','institucion.Nombre as Institucion')
        ->join('institucion','cargo.IdInstitucion','=','institucion.Id')
        ->where('institucion.Id','=',$idInstitucion)
        ->get();
        return response()->json($data);
    }
    public function get()
    {
        $data=Cargo::select('cargo.*','institucion.Nombre as Institucion')
        ->join('institucion','cargo.IdInstitucion','=','institucion.Id')
        ->get();
        return response()->json($data);
    }
    public function create(Request $request)
    {

        $cargo=new Cargo($request->input());
        $cargo->save();
        $idInstitucion=$request->input('IdInstitucion');
        $tasas=Tasa::select('tasa.Id')
        ->join('segmento','tasa.IdSegmento','=','segmento.Id')
        ->where('segmento.IdInstitucion','=',$idInstitucion)
        ->get();
        if(count($tasas)>0){
            foreach ($tasas as $tasa) {
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
            $data=Cargo::select('cargo.*','institucion.Nombre as Institucion')
                ->join('institucion','cargo.IdInstitucion','=','institucion.Id')
                ->where('cargo.Id','=',$id)
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
            Cargo::find($Id)->update($request->input());
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
            Cargo::find($Id)->delete();
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
