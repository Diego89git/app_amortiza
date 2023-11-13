import { Component,EventEmitter,Input ,Output} from '@angular/core';
import { MessageService } from 'primeng/api';
import { AplicarcargosService } from 'src/app/servicios/APIS/api-amortiza/aplicarcargos.service';

@Component({
  selector: 'app-tasas-cargos-admincli',
  templateUrl: './tasas-cargos-admincli.component.html',
  styleUrls: ['./tasas-cargos-admincli.component.css']
})
export class TasasCargosAdmincliComponent {
  @Input() dataDialog!: boolean;
  @Input() data: any
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()
  submitted: boolean = false;
  selectedTasaActiva:any
  selectedTasaPasiva:any
  tasasActivas:any[]=[]
  tasasPasivas:any[]=[]

  constructor(private aplicarcargoService: AplicarcargosService,
              private messageService:MessageService){

  }
  showDialog() {
    if(this.data.Id){
      this.obtenerTasasActivas()
      this.obtenerTasasPasivas()
    }
  }
  hideDialog() {
    this.onClick.emit()
    this.dataDialog = false;
    this.submitted = false;
  }
  obtenerTasasActivas(){
    this.aplicarcargoService.getActivosById(this.data.Id).subscribe(data=>{
      this.tasasActivas=data
      console.log(this.tasasActivas);
      
    })
  }
  obtenerTasasPasivas(){
    this.aplicarcargoService.getPasivosById(this.data.Id).subscribe(data=>{
      this.tasasPasivas=data
    })
  }
  aplicarTodo(){
    this.aplicarcargoService.aplicarTodos(this.data.Id).subscribe(data=>{
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'El cargo fue asignado a todas los tipos de crédito', life: 3000 });
    })
    this.hideDialog()
  }
  aplicarByTasa(){
    if(this.selectedTasaPasiva){
      this.aplicarcargoService.aplicarByTasa(this.data.Id, this.selectedTasaPasiva.IdTasa).subscribe(data=>{
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'El cargo fue asignado a '+this.selectedTasaPasiva.Tasa, life: 3000 });
      })
      this.hideDialog()
    }else{
      this.messageService.add({ severity: 'error', summary: 'Faltan datos', detail: 'Selecciona un tipo de crédito de la lista', life: 3000 });
    }
  }
  quitarTodo(){
    this.aplicarcargoService.quitarTodos(this.data.Id).subscribe(data=>{
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'El cargo fue retirado de todas los tipos de crédito', life: 3000 });
    })
    this.hideDialog()
  }
  quitarByTasa(){
    if(this.selectedTasaActiva){
      this.aplicarcargoService.quitarByTasa(this.data.Id, this.selectedTasaActiva.IdTasa).subscribe(data=>{
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'El cargo fue retirado de '+this.selectedTasaActiva.Tasa, life: 3000 });
      })
      this.hideDialog()
    }else{
      this.messageService.add({ severity: 'error', summary: 'Faltan datos', detail: 'Selecciona un tipo de crédito de la lista', life: 3000 });
    }
  }
}
