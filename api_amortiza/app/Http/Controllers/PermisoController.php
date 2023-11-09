<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Permiso;

class PermisoController extends Controller
{
    public function get()
    {
        $data=Permiso::select('permiso.*','users.name as Usuario','institucion.Nombre as Institucion','rol.Nombre as Rol')
        ->join('users','permiso.IdUser','=','users.id')
        ->join('institucion','permiso.IdInstitucion','=','institucion.Id')
        ->join('rol','permiso.IdRol','=','rol.Id')
        ->get();
        return response()->json($data);
    }
    public function create(Request $request)
    {

        $permiso=new Permiso($request->input());
        $permiso->save();
        return response()->json([
            'estado'=>true,
            'mensaje'=>'Registro creado Satisfactoriamente'
        ],200);
    }
    public function getById($id){
        try {
            $data=Permiso::select('permiso.*','users.name as Usuario','institucion.Nombre as Institucion','rol.Nombre as Rol')
                ->join('users','permiso.IdUser','=','users.id')
                ->join('institucion','permiso.IdInstitucion','=','institucion.Id')
                ->join('rol','permiso.IdRol','=','rol.Id')
                ->where('permiso.Id','=',$id)
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
            Permiso::find($Id)->update($request->input());
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
            Permiso::find($Id)->delete();
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
