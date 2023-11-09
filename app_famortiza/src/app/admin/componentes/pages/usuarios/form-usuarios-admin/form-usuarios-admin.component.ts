import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UsuariosService } from 'src/app/servicios/APIS/api-amortiza/usuarios.service';

@Component({
  selector: 'app-form-usuarios-admin',
  templateUrl: './form-usuarios-admin.component.html',
  styleUrls: ['./form-usuarios-admin.component.css']
})
export class FormUsuariosAdminComponent {
  @Input() data: any
  submitted: boolean = false;
  @Input() dataDialog!: boolean;
  @Input() dataSet!: any[];
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()

  formGroup?: FormGroup | any;
  constructor(
    private messageService: MessageService,
    private usuariosService: UsuariosService
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
      if (this.data.id) {
        const index = this.findIndexById(this.data.id);
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
      if (this.dataSet[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
  agregarData(row: any): void {
    this.usuariosService.postData(row).subscribe(response => {
      this.onClick.emit()
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro Creado', life: 3000 });
    });
  }
  actualizarData(row: any): void {
    console.log(this.data)
    this.usuariosService.putData(row.Id, row).subscribe(response => {
      this.onClick.emit()
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro Actualizado', life: 3000 });
    });
  }
}
