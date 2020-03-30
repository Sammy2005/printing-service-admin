import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'printerTray'
})
export class PrinterTrayPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        /*
        this.printerTrays
                .push({id: 0, name: 'Top'});
            this.printerTrays
                .push({id: 1, name: 'Middle'});
            this.printerTrays
                .push({id: 2, name: 'Bottom'});
            this.printerTrays
                .push({id: 3, name: 'Envelope'});
            this.printerTrays
                .push({id: 4, name: 'Manual'});
            this.printerTrays
                .push({id: 5, name: 'Large-capacity'});
            this.printerTrays
                .push({id: 6, name: 'Main'});
            this.printerTrays
                .push({id: 7, name: 'Side'});
         */
        switch (value) {
            case 0:
                return 'Top';
            case 1:
                return 'Middle';
            case 2:
                return 'Bottom';
            case 3:
                return 'Envelope';
            case 4:
                return 'Manual';
            case 5:
                return 'Large capacity';
            case 6:
                return 'Main';
            case 7:
                return 'Side';
        }
        return 'Tests';
    }

}
