import { Component } from '@angular/core';
import { InstitucionesService } from 'src/app/servicios/APIS/api-amortiza/instituciones.service';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-pag-institucion-admincli',
  templateUrl: './pag-institucion-admincli.component.html',
  styleUrls: ['./pag-institucion-admincli.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class PagInstitucionAdmincliComponent {
IdInstitucionSelected=localStorage.getItem('IdInstitucionSelected')

data:any
infoSegmentos:any[]=[]
constructor(private isntitucionService: InstitucionesService, 
            private messageService: MessageService,
            private confirmationService: ConfirmationService
            ){

}
ngOnInit(){
  this.obtenerInstitucion()
}
obtenerInstitucion(){
  this.isntitucionService.getDataById(this.IdInstitucionSelected).subscribe(data=>{
    this.data=data.dato
    console.log(this.data);
    
  })
}
actualizar(): void {

  if (this.data.Nombre?.trim()) {
        this.actualizarData(this.data)   
  }
}
actualizarData(row: any): void {
  this.isntitucionService.putData(row.Id, row).subscribe(response => {
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro Actualizado', life: 3000 });
  });
}
}
