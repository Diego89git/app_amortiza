<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\Permiso;

class UserController extends Controller
{
    public function create(Request $request){
        $reglas=['name'=>'required|string|max:100',
                'email'=>'required|string|email|max:100|unique:users',
                'password'=>'required|string|min:8',
                'IdInstitucion'=>'required',
                'IdRol'=>'required'];
        $validador=\Validator::make($request->input(),$reglas);
        if($validador->fails()){
            return response()->json([
                'estado'=>false,
                'errores'=>$validador->errors()->all()
            ],400);
        }
        $usuario=User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password)
        ]);
        $permiso=new Permiso([
            'IdUser'=>$usuario->id,
            'IdInstitucion'=>$request->IdInstitucion,
            'IdRol'=>$request->IdRol]);
        $permiso->save();
        
        return response()->json([
            'estado'=>true,
            'mesaje'=>'Registro creado satisfactoriamente',
            'token'=>$usuario->createToken('API TOKEN')->plainTextToken
        ],200);
    }
    public function index()
    {
        $usuarios=User::select('users.*','permiso.IdUser','permiso.IdInstitucion','permiso.IdRol','institucion.Nombre as Institucion','rol.Nombre as Rol')
        ->join('permiso','users.id','=','permiso.IdUser')
        ->join('institucion','permiso.IdInstitucion','=','institucion.Id')
        ->join('rol','permiso.IdRol','=','rol.Id')
        ->get();
        return response()->json($usuarios);
    }
    public function getById($id){
        try {
            $usuarios=User::select('users.*','permiso.IdUser','permiso.IdInstitucion','permiso.IdRol','institucion.Nombre as Institucion','rol.Nombre as Rol')
                ->join('permiso','users.id','=','permiso.IdUser')
                ->join('institucion','permiso.IdInstitucion','=','institucion.Id')
                ->join('rol','permiso.IdRol','=','rol.Id')
                ->where('users.Id','=',$id)
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
    public function update(Request $request, $id)
    {
        try {
            User::find($id)->update([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>Hash::make($request->password)]);
                Permiso::where('IdUser',$id)->update([
                    'IdUser'=>$id,
                    'IdInstitucion'=>$request->IdInstitucion,
                    'IdRol'=>$request->IdRol]);
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
            User::find($Id)->delete();
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
