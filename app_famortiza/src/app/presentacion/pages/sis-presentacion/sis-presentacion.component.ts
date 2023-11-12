import { Component } from '@angular/core';
import { AmortizacionService } from 'src/app/servicios/APIS/api-amortiza/amortizacion.service';

@Component({
  selector: 'app-sis-presentacion',
  templateUrl: './sis-presentacion.component.html',
  styleUrls: ['./sis-presentacion.component.css']
})
export class SisPresentacionComponent {
infoInstitucion:any
infoSegmentos:any[]=[]

constructor(private serviceAmortiza:AmortizacionService){
  this.obtenerInfo()
}

ngOnInit(){
  
}

obtenerInfo(){
  this.serviceAmortiza.getInfo().subscribe(data=>{
    this.infoInstitucion=data.Institucion[0]
    this.infoSegmentos=data.Segmentos
    localStorage.setItem('IdInstitucion', this.infoInstitucion.Id);
    
  })
}
}
