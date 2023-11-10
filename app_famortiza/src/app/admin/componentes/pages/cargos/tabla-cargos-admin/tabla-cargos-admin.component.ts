import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import * as FileSaver from 'file-saver';
import * as jspdf from 'jspdf';
import { UserOptions } from 'jspdf-autotable';
import 'jspdf-autotable';

import { SegmentosService } from 'src/app/servicios/APIS/api-amortiza/segmentos.service';
import { CargosService } from 'src/app/servicios/APIS/api-amortiza/cargos.service';
import { InstitucionesService } from 'src/app/servicios/APIS/api-amortiza/instituciones.service';

interface jsPDFWithPlugin extends jspdf.jsPDF {
  autoTable: (options: UserOptions) => jspdf.jsPDF;
}
interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}
interface ExportColumn {
  title: string;
  dataKey: string;
}
@Component({
  selector: 'app-tabla-cargos-admin',
  templateUrl: './tabla-cargos-admin.component.html',
  styleUrls: ['./tabla-cargos-admin.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class TablaCargosAdminComponent {
  dataSet: any[] = []
  SelectedDataSet!: any[] | null
  data: any
  cols!: Column[];
  dataDialog: boolean = false;
  exportColumns!: ExportColumn[];
  mostrarForm: boolean = false

  //para dropdown
  selectedDropdown: any = { Id: 0, Nombre: 'Selecciona una Institucion...', Institucion:'' }
  dataDropdown: any[] = [];

 
  constructor(private cargosServices: CargosService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private institucionService:InstitucionesService
    ) {
      this.obtenerDataDropdown()
  }
  ngOnInit() {
    this.obtenerDataSet()

    this.cols = [
      { field:'Id', header:'Id', customExportHeader: 'Codigo Registro' },
      { field:'IdInstitucion', header: 'IdInstitucion ' },
      { field:'Institucion', header:'Institucion' },
      { field:'Nombre',header:'Nombre'},
      { field:'Descripcion',header:'Descripcion'},
      { field:'FormaPago',header:'FormaPago'},
      { field:'Base',header:'Base'},
      { field:'Valor',header:'Valor'},
      { field:'Porcentaje',header:'Porcentaje'}
    ];
    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }
  obtenerDataSet() {
    this.cargosServices.getData().subscribe(data => {
      this.dataSet = data
    })
  }
  obtenerDataDropdown() {
    this.institucionService.getData().subscribe(data => {
      this.dataDropdown = data
    })
  }
  exportPdf() {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default('p', 'px', 'a4');
        (doc as any).autoTable(this.exportColumns, this.dataSet);
        doc.save('products.pdf');
      });
    });
  }
  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.dataSet);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'products');
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
  openNew() {
    this.selectedDropdown = { Id: 0, Nombre: 'Selecciona una Institucion...', Institucion:'' }
    this.data = {};
    this.mostrarForm = true
    this.dataDialog = true;

  }
  editRow(row: any) {
    this.mostrarForm = true
    this.selectedDropdown = { ...this.dataDropdown.find((reg: any) => reg.Id == row.IdInstitucion) };
    this.data = { ...row };
    this.dataDialog = true;
  }
  deleteRow(row: any) {
    this.confirmationService.confirm({
      message: 'Estas seguro que deseas eliminar: ' + row.Titulo + '?',
      header: 'Confirmación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.eliminarRegistro(row.Id);
      }
    });
  }
  hideDialog() {
    this.obtenerDataSet()
    this.mostrarForm = false
    this.dataDialog = false;
  }
  eliminarRegistro(id: number) {
    this.cargosServices.deleteData(id).subscribe(
      (response) => {
        this.dataSet = this.dataSet.filter((val) => val.Id !== id);
        this.data = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro Eliminado', life: 3000 });
        this.obtenerDataSet()
      },
      (error) => {
        console.error('Error al eliminar el registro', error);
        this.messageService.add({ severity: 'error', summary: 'Advertencia', detail: 'Registro NO Eliminado : ' + error, life: 3000 });
        this.obtenerDataSet()
      }
    );
  }
}
