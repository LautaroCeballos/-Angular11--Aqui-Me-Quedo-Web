import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatPhone'
})
export class FormatPhone implements PipeTransform{
    transform(value: any){
        const valueString = value.toString();

        const telefono = [
            valueString.substring(0,2),   //54
            valueString.substring(2,3),   //9
            valueString.substring(3, 7), //3544
            valueString.substring(7, 13) //565770
        ]
        
        const tel = '+' + telefono[0] + ' ' + telefono[1] + " " + telefono[2] + " " + telefono[3]

        return tel;
    }
}
