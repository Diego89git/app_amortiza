import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SegmentosService } from 'src/app/servicios/APIS/api-amortiza/segmentos.service';

@Component({
  selector: 'app-form-segmentos-admin',
  templateUrl: './form-segmentos-admin.component.html',
  styleUrls: ['./form-segmentos-admin.component.css']
})
export class FormSegmentosAdminComponent {
  @Input() data: any
  submitted: boolean = false;
  @Input() dataDialog!: boolean;
  @Input() dataSet!: any[];
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()
  formGroup?: FormGroup | any;
  //datos de dropdown
  @Input() dataDropdown!: any[];
  @Input()selectedDropdown:any
  
  constructor(
    private messageService: MessageService,
    private segmentosService: SegmentosService
  ) {

  }
  ngOnInit() {
    this.formGroup = new FormGroup({
      IdInstitucion: new FormControl<any | null>(null)
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
    this.data.IdInstitucion=this.selectedDropdown.Id
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
    this.segmentosService.postData(row).subscribe(response => {
      this.onClick.emit()
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro Creado', life: 3000 });
    });
  }
  actualizarData(row: any): void {
    console.log(this.data)
    this.segmentosService.putData(row.Id, row).subscribe(response => {
      this.onClick.emit()
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro Actualizado', life: 3000 });
    });
  }
}
