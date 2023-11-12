import { Component,Input } from '@angular/core';
import * as FileSaver from 'file-saver';
interface ExportColumn {
  title: string;
  dataKey: string;
}
interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}
@Component({
  selector: 'app-tabla-sis-pres',
  templateUrl: './tabla-sis-pres.component.html',
  styleUrls: ['./tabla-sis-pres.component.css']
})
export class TablaSisPresComponent {
@Input() data:any
@Input() columnasTabla?:string[]
SelectedData:any
@Input() exportColumns!: ExportColumn[];
cols!: Column[];

constructor(){
  
  
}
ngOnInit(){
  
}


exportPdf() {
  import('jspdf').then((jsPDF) => {
    import('jspdf-autotable').then((x) => {
      const doc = new jsPDF.default('l', 'px', 'a4');
      const styles = { cellPadding: 5, fontSize: 10, align: 'left' };
      (doc as any).autoTable({
        head: [this.exportColumns], // Encabezados
        body: this.data.map((row:any) => this.columnasTabla?.map(col => row[col])), // Datos
        styles,
      });
      doc.save('tabla.pdf');
    });
  });
}
exportExcel() {
  import('xlsx').then((xlsx) => {
    const worksheet = xlsx.utils.json_to_sheet(this.data);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'tabla');
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
}
