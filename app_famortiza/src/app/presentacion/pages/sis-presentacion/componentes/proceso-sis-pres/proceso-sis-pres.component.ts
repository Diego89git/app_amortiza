import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AmortizacionService } from 'src/app/servicios/APIS/api-amortiza/amortizacion.service';
import { TasasService } from 'src/app/servicios/APIS/api-amortiza/tasas.service';
interface ExportColumn {
  title: string;
  dataKey: string;
}
@Component({
  selector: 'app-proceso-sis-pres',
  templateUrl: './proceso-sis-pres.component.html',
  styleUrls: ['./proceso-sis-pres.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class ProcesoSisPresComponent {
tasas:any[]=[]
resultTabla:any[]=[]
resultResumen:any
resultCargosEntrega:any[]=[]
resultCargosCuota:any[]=[]
IdTasa:any;
Plazo:number=0
Monto:number=0;
sistema={name:'Aleman'}
sistemasAmortizacion=[{name:'Aleman'},{name:'Frances'}]
selectedTasa:any={Id:0,Detalle:'Seleccione un tipo de crédito', Segmento:'', TasaEfectiva:'',MontoMinimo:1, MontoMaximo:999999999, PlazoMinimo:1,PlazoMaximo:9999999}
idInstitucion:any
formGroup?: FormGroup | any;
columnasTabla: string[] = [];
columnasCargoEntrega:string[] = [];
columnasCargoCuota:string[] = [];
exportColumns!: ExportColumn[];
valorEntregar:number=0
constructor(private tasasService:TasasService,
            private messageService: MessageService,
            private amortizaService: AmortizacionService){
  this.idInstitucion=localStorage.getItem('IdInstitucion');
  this.obtenerTasas()
}
ngOnInit() {
  this.formGroup = new FormGroup({
    IdTasa: new FormControl<any | null>(null)
  });
}
obtenerColumnasTabla(){
  this.resultTabla.forEach((fila:any) => {
    Object.keys(fila).forEach((columna) => {
      if (!this.columnasTabla.includes(columna)) {
        this.columnasTabla.push(columna);
      }
    });
  });
  
}
obtenerColumnasCargoEntrega(){
  this.resultCargosEntrega.forEach((fila:any) => {
    Object.keys(fila).forEach((columna) => {
      if (!this.columnasCargoEntrega.includes(columna)) {
        this.columnasCargoEntrega.push(columna);
      }
    });
  });
  
}
obtenerColumnasCargoCuota(){
  this.resultCargosCuota.forEach((fila:any) => {
    Object.keys(fila).forEach((columna) => {
      if (!this.columnasCargoCuota.includes(columna)) {
        this.columnasCargoCuota.push(columna);
      }
    });
  });
  
}
obtenerTasas(){
  this.tasasService.getDataByInstitucion(this.idInstitucion).subscribe(data=>{
    this.tasas=data;
  })
}
generar(){
  if(this.selectedTasa.Id==0){
    alert('selecciones un tipo de crédito')
    
  }else{

    if(this.Plazo==0){
      alert('El monto no puede ser igual a cero (0)')
    }else{
      if(this.Monto==0){
        alert('El monto no puede ser igual a cero (0)')
      }else{
        const data={IdTasa:this.selectedTasa.Id, Plazo:this.Plazo, Monto:this.Monto, Sistema:this.sistema.name}
        this.amortizaService.generarTabla(data).subscribe(data=>{
          this.resultResumen=data.resumen
          this.resultTabla=data.tabla
          this.resultCargosEntrega=data.cargosEntrega
          this.resultCargosCuota=data.cargosCuota
          this.obtenerColumnasTabla()
          this.obtenerColumnasCargoEntrega()
          this.obtenerColumnasCargoCuota()
          this.calcularValorEntrega()
          this.exportColumns = this.columnasTabla.map((col) => ({ title: col, dataKey: col }));
          
          
          
        })
      }
    }
  }
   
}
calcularValorEntrega(){
  let total=0;
    for (const cargos  of this.resultCargosEntrega) {
      total+=cargos.Valor
      console.log('cargo:');
      console.log(cargos);
      
      
    }
  this.valorEntregar=this.Monto-total
}
}
