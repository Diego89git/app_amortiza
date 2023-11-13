import { Component } from '@angular/core';
import { AmortizacionService } from 'src/app/servicios/APIS/api-amortiza/amortizacion.service';
import { InstitucionesService } from 'src/app/servicios/APIS/api-amortiza/instituciones.service';


@Component({
  selector: 'app-dashboard-admincli',
  templateUrl: './dashboard-admincli.component.html',
  styleUrls: ['./dashboard-admincli.component.css']
})
export class DashboardAdmincliComponent {
IdInstitucionSelected=localStorage.getItem('IdInstitucionSelected')
institucion:any
infoSegmentos:any[]=[]
constructor(private isntitucionService: InstitucionesService, 
            private amrtizaServie: AmortizacionService){

}

ngOnInit(){

  this.obtenerSegmentos()
}
obtenerSegmentos(){
  this.amrtizaServie.getInfoByIdInstitucion(this.IdInstitucionSelected).subscribe(data=>{
    this.infoSegmentos=data.Segmentos
    console.log(this.infoSegmentos)
  })
}
}
