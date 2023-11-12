import { Component } from '@angular/core';
import { AmortizacionService } from 'src/app/servicios/APIS/api-amortiza/amortizacion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-info-sis-pres',
  templateUrl: './info-sis-pres.component.html',
  styleUrls: ['./info-sis-pres.component.css']
})
export class InfoSisPresComponent {
infoSegmentos:any[]=[]

constructor(private amortizaServices:AmortizacionService, private router: Router){
  
}
ngOnInit(){
  this.obtenerSegmentos()
}
obtenerSegmentos(){
  this.amortizaServices.getInfo().subscribe(data=>{
    this.infoSegmentos=data.Segmentos
    console.log(this.infoSegmentos)
  })
}

}
