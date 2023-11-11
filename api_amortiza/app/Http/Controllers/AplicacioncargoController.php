<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Aplicacioncargo;

class AplicacioncargoController extends Controller
{
    public function get()
    {
        $data=Aplicacioncargo::select('aplicacioncargo.*','tasa.Detalle as Tasa','cargo.Nombre as Cargo')
        ->join('tasa','aplicacioncargo.IdTasa','=','tasa.Id')
        ->join('cargo','aplicacioncargo.IdCargo','=','cargo.Id')
        ->get();
        return response()->json($data);
    }
    public function create(Request $request)
    {

        $aplicacioncargo=new Aplicacioncargo($request->input());
        $aplicacioncargo->save();
        return response()->json([
            'estado'=>true,
            'mensaje'=>'Registro creado Satisfactoriamente'
        ],200);
    }
    public function getById($id){
        try {
            $data=Aplicacioncargo::select('aplicacioncargo.*','tasa.Detalle as Tasa','cargo.Nombre as Cargo')
                ->join('tasa','aplicacioncargo.IdTasa','=','tasa.Id')
                ->join('cargo','aplicacioncargo.IdCargo','=','cargo.Id')
                ->where('aplicacioncargo.Id','=',$id)
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
    public function aplicarTodos($idCargo)
    {
        try {
            Aplicacioncargo::where('IdCargo',$idCargo)->update(['Estado'=>'ACT']);
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
    public function aplicarByTasa($idCargo,$idTasa)
    {
        try {
            Aplicacioncargo::where('IdCargo',$idCargo)->where('IdTasa',$idTasa)->update(['Estado'=>'ACT']);
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
    public function quitarTodos($idCargo)
    {
        try {
            Aplicacioncargo::where('IdCargo',$idCargo)->update(['Estado'=>'ELI']);
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
    public function quitarByTasa($idCargo, $idTasa)
    {
        try {
            Aplicacioncargo::where('IdCargo',$idCargo)->where('IdTasa',$idTasa)->update(['Estado'=>'ELI']);
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
    public function update(Request $request, $Id)
    {
        try {
            Aplicacioncargo::find($Id)->update($request->input());
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
            Aplicacioncargo::find($Id)->delete();
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
