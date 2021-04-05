import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'espar'
})
export class EsParPipe implements PipeTransform{
    transform (value: any){
        if(value % 2 == 0){
            return `La fecha es: ${value} par`;
        }
        return `La fecha es: ${value} impar`;
    }
}