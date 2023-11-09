<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Institucion;

class InstitucionController extends Controller
{
    public function get()
    {
        $institucion=Institucion::all();
        return response()->json($institucion);
    }
    public function create(Request $request)
    {
        $reglas =['Nombre'=>'required|string|min:1|max:100'];
        $validador=\Validator::make($request->input(),$reglas);
        if($validador->fails()){
            return response()->json([
                'estado'=>false,
                'errores'=>$validador->errors()->all()
            ],400);
        }
        $institucion=new Institucion($request->input());
        $institucion->save();
        return response()->json([
            'estado'=>true,
            'mensaje'=>'Registro creado Satisfactoriamente'
        ],200);
    }
    public function getById($id){
        try {
            $data=Institucion::find($id);
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
            Institucion::find($Id)->update($request->input());
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
            Institucion::find($Id)->delete();
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
