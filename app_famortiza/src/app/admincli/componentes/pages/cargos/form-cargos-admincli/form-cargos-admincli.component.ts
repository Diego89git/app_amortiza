import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CargosService } from 'src/app/servicios/APIS/api-amortiza/cargos.service';


@Component({
  selector: 'app-form-cargos-admincli',
  templateUrl: './form-cargos-admincli.component.html',
  styleUrls: ['./form-cargos-admincli.component.css']
})
export class FormCargosAdmincliComponent {
  @Input() data: any
  submitted: boolean = false;
  @Input() dataDialog!: boolean;
  @Input() dataSet!: any[];
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()
  formGroup?: FormGroup | any;
  IdInstitucionSelected=localStorage.getItem('IdInstitucionSelected')

   //dropdown para Formas de pago
   formaPago:any[]=[{tipo:'Cuotas',descripcion:'Se calula para el numero de cuotas y se cargara su valor en cada cuota'}
   ,{tipo:'Entrega',descripcion:'Se descontará del valor a entregar como efectivo del credito solicitado'}]
    selectedFormaPago:any
   //dropdown para Base de calculo
   baseCalculo:any[]=[{tipo:'Capital',descripcion:'Se calculará a partir del valor del capital o monto solicitado para el crédito'}
   ,{tipo:'Saldo',descripcion:'Se calculará sobre el saldo que resulte de ir abonando al capital por cada cuota'}
   ,{tipo:'Valor',descripcion:'Se registrará un valor fijo a cobrar por el cargo'}]
   selectedBaseCalculo:any

   

  constructor(
    private messageService: MessageService,
    private cargosServices: CargosService
  ) {

  }
  //logica para activar porcentaje o valor
  mostrarPorcentaje=false
  mostrarValor=false
  cambioBaseCalculo(){
    this.mostrarPorcentaje=false
    this.mostrarValor=false
    if(this.selectedBaseCalculo.tipo=='Saldo'){
      this.mostrarPorcentaje=true
    }
    if(this.selectedBaseCalculo.tipo=='Capital'){
      this.mostrarPorcentaje=true
    }
    if(this.selectedBaseCalculo.tipo=='Valor'){
      this.mostrarValor=true
    }
  }
  //fin logica
  ngOnInit() {
    this.formGroup = new FormGroup({
      formaPago: new FormControl<any | null>(null),
      baseCalculo: new FormControl<any | null>(null)
    });
  }

  showDialog() {
    if(this.data.Id){
      this.selectedFormaPago={ ...this.formaPago.find((reg: any) => reg.tipo == this.data.FormaPago) };
      this.selectedBaseCalculo={ ...this.baseCalculo.find((reg: any) => reg.tipo == this.data.Base) };
   
    }
  }
  hideDialog() {
    this.onClick.emit()
    this.dataDialog = false;
    this.submitted = false;
  }
  saveRegistro(): void {
    this.submitted = true;
    this.data.IdInstitucion=this.IdInstitucionSelected
    this.data.FormaPago=this.selectedFormaPago.tipo
    this.data.Base=this.selectedBaseCalculo.tipo
    if(this.data.Base=='Valor'){
      this.data.Porcentaje=null
    }else{
      this.data.Valor=null
    }
    if (this.data.Nombre?.trim()) {
      if (this.data.Id) {
        const index = this.findIndexById(this.data.Id);
        if (index !== -1) {
          this.dataSet[index] = { ...this.dataSet[index], ...this.data };
          this.actualizarData(this.data)          
          this.data = {};
        }
      } else {
        this.dataSet.push(this.data);
        this.agregarData(this.data);
        this.data = {};
      }

      this.dataSet = [...this.dataSet];
      this.dataDialog = false;
    }
  }
  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.dataSet.length; i++) {
      if (this.dataSet[i].Id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
  agregarData(row: any): void {
    this.cargosServices.postData(row).subscribe(response => {
      this.onClick.emit()
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro Creado', life: 3000 });
    });
  }
  actualizarData(row: any): void {
    console.log(this.data)
    this.cargosServices.putData(row.Id, row).subscribe(response => {
      this.onClick.emit()
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro Actualizado', life: 3000 });
    });
  }
}
