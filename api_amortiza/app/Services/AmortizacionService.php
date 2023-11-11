<?php
namespace App\Services;

class AmortizacionService{
    public function generarTablaAmortizacion($parametros, $cargos){

        $parametros->Tasa=floatval($parametros->Tasa)/100/12;
        $sistema=$parametros->Sistema;
        
        $tabla;
        if($parametros->Sistema=='Frances'){
            $tabla= $this->calcularSistemaFrances($parametros);
        }else{
            $tabla=$this->calcularSistemaAleman($parametros);
        }
        $response= new \stdClass();
        $response->tabla=$tabla;
        $response->cargosEntrega=[];
        $response->cargosCuota=[];
          
        if(count($cargos)>0){
            $response=  $this->agregarCargos($response, $cargos, $parametros);

        } 
        $response->resumen=$this->sumarElementosTabla($response->tabla);
        return $response;
    }

    public function calcularSistemaFrances($parametros){
        $tasa=$parametros->Tasa;
        $monto=$parametros->Monto;
        $plazo=$parametros->Plazo;


        $cuota=$this->calcularCuotaFrances($monto, $plazo, $tasa);
        
        return $this->generarTablaFrances($cuota, $plazo, $tasa, $monto);
         

    }
    public function calcularCuotaFrances($monto, $plazo, $tasa){
        //Formula= Cp*(interes menusal)/(1-(1+ interes mensual)elevado a la menos n)
       $potenciaNegativa=$plazo*-1;
       return round($monto*($tasa/(1-pow((1+$tasa),$potenciaNegativa))),2);
    
    }
    public function generarTablaFrances($cuota, $plazo, $tasa, $monto){
        $tabla=[];
        $saldo=$monto;
        for ($i=0; $i <= $plazo; $i++) { 
            $registro=[
                'Indice'=>$i,
                'Saldo'=>$saldo,
                'Cuota'=>0,
                'Interes'=>0,
                'Capital'=>0,
                'TotalCargos'=>0,
                'CuotaFinal'=>0

            ];
            if($i>0){
                $registro['Cuota']=$cuota;
                $intereses=round($saldo*$tasa,2);
                $registro['Interes']=$intereses;
                $capital=round($cuota-$intereses,2);
                $registro['Capital']=$capital;
                $registro['CuotaFinal']=$cuota;
                $saldo-=$capital;
                $registro['Saldo']=round($saldo,2);
            }
            $tabla[]=$registro;
        }

        return $tabla;

    }  
    public function calcularSistemaAleman($parametros){
        $tasa=$parametros->Tasa;
        $monto=$parametros->Monto;
        $plazo=$parametros->Plazo;


        $capital=round($monto/$plazo,2);
        
        return $this->generarTablaAleman($capital, $plazo, $tasa, $monto);
    }
    public function generarTablaAleman($capital, $plazo, $tasa, $monto){
        $tabla=[];
        $saldo=$monto;
        for ($i=0; $i <= $plazo; $i++) { 
            $registro=[
                'Indice'=>$i,
                'Saldo'=>$saldo,
                'Cuota'=>0,
                'Interes'=>0,
                'Capital'=>0,
                'TotalCargos'=>0,
                'CuotaFinal'=>0
            ];
            if($i>0){
                
                $intereses=round($saldo*$tasa,2);
                $registro['Interes']=$intereses;
                $cuota=$capital+$intereses;
                $registro['Cuota']=$cuota;
                $registro['CuotaFinal']=$cuota;
                $registro['Capital']=$capital;
                $saldo-=$capital;
                $registro['Saldo']=round($saldo,2);
            }
            $tabla[]=$registro;
        }
        return $tabla;

    } 
    public function agregarCargos($response, $cargos, $parametros){

        if($cargos){
            foreach ($cargos as $cargo) {  
                $response= $this->agregarCargo($response, $cargo, $parametros); 
            }
        }
        return $response;
    }
    public function agregarCargo($response, $cargo, $parametros){
        
        $valor=0;
        if($cargo['Base']=='Saldo'){
            $addcargo=['Nombre'=>$cargo['Nombre'],'Valor'=>$valor];
            $response->cargosCuota[]=$addcargo;
            $response->tabla= $this->agregarCargoCuotaSobreSaldo($response->tabla,$cargo['Porcentaje'],$cargo['Nombre']);
        }
        
        if($cargo['Base']=='Capital'){
            $valor=$parametros->Monto*$cargo['Porcentaje']/100;
            
            if($cargo['FormaPago']=='Entrega'){
                $addcargo=['Nombre'=>$cargo['Nombre'],'Valor'=>$valor];
                $response->cargosEntrega[]=$addcargo;
            }else{
                $abnCuota=$valor/$parametros->Plazo;
                $addcargo=['Nombre'=>$cargo['Nombre'],'Valor'=>$valor];
                $response->cargosCuota[]=$addcargo;
                $response->tabla= $this->agregarCargoCuotaFija($response->tabla,$abnCuota,$cargo['Nombre']);
            }
        }
        if($cargo['Base']=='Valor'){
            $valor=$cargo['Valor'];
            if($cargo['FormaPago']=='Entrega'){
                $addcargo=['Nombre'=>$cargo['Nombre'],'Valor'=>$valor];
                $response->cargosEntrega[]=$addcargo;
            }else{
                $addcargo=['Nombre'=>$cargo['Nombre'],'Valor'=>$valor];
                $response->cargosCuota[]=$addcargo;
                $abnCuota=$valor/$parametros->Plazo;
                $response->tabla= $this->agregarCargoCuotaFija($response->tabla,$abnCuota,$cargo['Nombre']);
            }
        }
        return $response;
        
    }
    public function agregarCargoCuotaSobreSaldo($tabla, $porcentaje, $nombre){
        $numReg=count($tabla);
        $saldo=0;
        for ($i=0; $i < $numReg ; $i++) { 
            if($i>0){
                $tabla[$i][$nombre]=$saldo*$porcentaje/100;
                $tabla[$i]['TotalCargos']+=$tabla[$i][$nombre];
                $tabla[$i]['CuotaFinal']+=$tabla[$i][$nombre];
            }else{
                $tabla[$i][$nombre]=0;
            }
            
            $saldo=$tabla[$i]['Saldo'];
        }
        return $tabla;
    }
    public function agregarCargoCuotaFija($tabla, $abnCuota, $nombre){
        $numReg=count($tabla);
        $saldo=0;
        
        for ($i=0; $i < $numReg ; $i++) { 
            if($i>0){
                $tabla[$i][$nombre]=$abnCuota;
                $tabla[$i]['TotalCargos']+=$tabla[$i][$nombre];
                $tabla[$i]['CuotaFinal']+=$tabla[$i][$nombre];
            }else{
                $tabla[$i][$nombre]=0;
            }
            
            $saldo=$tabla[$i]['Saldo'];
        }
        return $tabla;
    }
    public function sumarElementosTabla($tabla) {
        $resumen = [];
        foreach ($tabla as $registro) {
            foreach ($registro as $clave => $valor) {
                if (!isset($resumen[$clave])) {
                    $resumen[$clave] = 0;
                }
                $resumen[$clave] += round($valor,2);
            }
        }
        $resultado = new \stdClass();
        foreach ($resumen as $clave => $suma) {
            $resultado->$clave = round($suma,2);
        }
        return $resumen;
    }

}