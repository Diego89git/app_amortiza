<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cargo;

class CargoController extends Controller
{
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
