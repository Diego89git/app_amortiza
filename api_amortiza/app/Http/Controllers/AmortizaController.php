<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Permiso;
use App\Models\Tasa;
use App\Services\AmortizacionService;
use App\Models\Aplicacioncargo;
use App\Models\Institucion;
use App\Models\Segmento;

class AmortizaController extends Controller
{
    protected $amortizacionService;

    public function __construct(AmortizacionService $amortizacionService)
    {
        $this->amortizacionService = $amortizacionService;
    }
    public function generarAmortizacion(Request $request)
    {
        $tasaId=$request['IdTasa'];
        $monto=$request['Monto'];
        $plazo=$request['Plazo'];
        $sistema=$request['Sistema'];
        $tasa=Tasa::find($tasaId);
        $tasaNominal=$tasa['TasaNominal'];
        $parametros= new \stdClass();
        $parametros->Tasa=$tasaNominal;
        $parametros->Monto=$monto;
        $parametros->Plazo=$plazo;
        $parametros->Sistema=$sistema;

        $cargos=Aplicacioncargo::select('cargo.Nombre', 'cargo.FormaPago', 'cargo.Base', 'cargo.Valor', 'cargo.Porcentaje')
        ->join('tasa','aplicacioncargo.IdTasa','=','tasa.Id')
        ->join('cargo','aplicacioncargo.IdCargo','=','cargo.Id')
        ->where('tasa.Id','=',$tasaId)
        ->where('aplicacioncargo.Estado','=','ACT')
        ->get();
        $result=$this->amortizacionService->generarTablaAmortizacion($parametros, $cargos);
        return response()->json($result);
    }
    public function info(){
        $info= new \stdClass();
        $institucion=Institucion::where('Habilitado',true)->get();
        $segmentos=Segmento::select('segmento.Id','segmento.Nombre','segmento.Descripcion','segmento.RutaImagen')
        ->join('institucion','segmento.IdInstitucion','=','institucion.Id')
        ->where('institucion.Habilitado','=',true)
        ->get();
        $nivel=[];
        if(count($segmentos)>0){
            foreach ($segmentos as $segmento) {
                $tasas=Tasa::select('tasa.Detalle','tasa.Observacion')
                ->where('tasa.IdSegmento','=',$segmento->Id)->get();
                $tasaMin=Tasa::where('IdSegmento', $segmento->Id)->min('TasaEfectiva');             
                $tasaMax=Tasa::where('IdSegmento', $segmento->Id)->max('TasaEfectiva');
                $plazoMin=Tasa::where('IdSegmento', $segmento->Id)->min('PlazoMinimo');             
                $plazoMax=Tasa::where('IdSegmento', $segmento->Id)->max('PlazoMaximo');
                $montoMin=Tasa::where('IdSegmento', $segmento->Id)->min('MontoMinimo');             
                $montoMax=Tasa::where('IdSegmento', $segmento->Id)->max('MontoMaximo');
                $dato=[
                    'Nombre'=>$segmento->Nombre,
                    'Descripcion'=>$segmento->Descripcion,
                    'RutaImagen'=>$segmento->RutaImagen,
                    'Tasas'=>$tasas,
                    'TasaMin'=>$tasaMin,
                    'TasaMax'=>$tasaMax,
                    'PlazoMin'=>$plazoMin,
                    'PlazoMax'=>$plazoMax,
                    'MontoMin'=>$montoMin,
                    'MontoMax'=>$montoMax
                ];
                $nivel[]=$dato;
            }
        }
        $info->Institucion=$institucion;
        $info->Segmentos=$nivel;
        return response()->json($info);
    }
}
