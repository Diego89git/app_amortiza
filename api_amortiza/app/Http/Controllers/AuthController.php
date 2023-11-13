<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function create(Request $request){
        $reglas=['name'=>'required|string|max:100',
                'email'=>'required|string|email|max:100|unique:users',
                'password'=>'required|string|min:8'];
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
        return response()->json([
            'estado'=>true,
            'mesaje'=>'Registro creado satisfactoriamente',
            'token'=>$usuario->createToken('API TOKEN')->plainTextToken
        ],200);
    }
    public function login(Request $request){
        $reglas=[
            'email'=>'required|string|max:100',
            'password'=>'required|string'
        ];
        $validador=\Validator::make($request->input(), $reglas);
        if($validador->fails()){
            return response()->json([
                'estado'=>false,
                'errores'=>$validador->errors()->all()
            ],400);
        }
        if(!Auth::attempt($request->only('email','password'))){
            return response()->json([
                'estado'=>false,
                'mensaje'=>'Usuario No autorizado'
            ],401);
        }
        $usuario=User::where('email',$request->email)->first();
        $data=User::select('users.*','permiso.IdUser','permiso.IdInstitucion','permiso.IdRol','institucion.Nombre as Institucion','rol.Nombre as Rol')
        ->join('permiso','users.id','=','permiso.IdUser')
        ->join('institucion','permiso.IdInstitucion','=','institucion.Id')
        ->join('rol','permiso.IdRol','=','rol.Id')
        ->where('users.email','=',$request->email)
        ->first();
        return response()->json([
            'estado'=>true,
            'mesaje'=>'Usuario logiado satisfactoriamente',
            'dato'=>$data,
            'token'=>$usuario->createToken('API TOKEN')->plainTextToken
        ],200);
    }
    public function logout(){
        auth()->user()->tokens()->delete();
        return response()->json([
            'estado'=>true,
            'mesaje'=>'Cesion cerrada satisfactoriamente'
        ],200);
    }
}
