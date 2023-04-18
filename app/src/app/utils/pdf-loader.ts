import html2canvas from "html2canvas";
import jsPDF from 'jspdf'

export class PDFLoader {
    constructor(public DATA: any) {}

    public openPDF(): void {
        if (!this.DATA) {
            throw new Error('No data provided');
        }

        html2canvas(this.DATA).then((canvas) => {
            let fileWidth = 208;
            let fileHeight = (canvas.height * fileWidth) / canvas.width;
            const FILEURI = canvas.toDataURL('image/png');
            let PDF = new jsPDF('p', 'mm', 'a4');
            let position = 0;
            PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
            PDF.save('angular-demo.pdf');
        });
    }
}