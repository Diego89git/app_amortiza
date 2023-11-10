import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { InstitucionesService } from 'src/app/servicios/APIS/api-amortiza/instituciones.service';
import { RolesService } from 'src/app/servicios/APIS/api-amortiza/roles.service';

@Component({
  selector: 'app-form-instituciones-admin',
  templateUrl: './form-instituciones-admin.component.html',
  styleUrls: ['./form-instituciones-admin.component.css']
})
export class FormInstitucionesAdminComponent {
  @Input() data: any
  submitted: boolean = false;
  @Input() dataDialog!: boolean;
  @Input() dataSet!: any[];
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()

  formGroup?: FormGroup | any;
  constructor(
    private messageService: MessageService,
    private institucionServices: InstitucionesService
  ) {

  }
  ngOnInit() {
    this.formGroup = new FormGroup({
      IdGrupo: new FormControl<any | null>(null)
    });
  }

  showDialog() {
    
  }
  hideDialog() {
    this.onClick.emit()
    this.dataDialog = false;
    this.submitted = false;
  }
  saveRegistro(): void {
    this.submitted = true;
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
    this.institucionServices.postData(row).subscribe(response => {
      this.onClick.emit()
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro Creado', life: 3000 });
    });
  }
  actualizarData(row: any): void {
    console.log(this.data)
    this.institucionServices.putData(row.Id, row).subscribe(response => {
      this.onClick.emit()
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro Actualizado', life: 3000 });
    });
  }
}
