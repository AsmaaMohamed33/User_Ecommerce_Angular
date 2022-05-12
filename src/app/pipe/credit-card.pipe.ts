import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {
  
  transform(value:string): string {
     var first = value.slice(0-4);
     var second = value.slice(4-8);
     var middle = value.slice(8-12);
     var last = value.slice(12-16);
     var de = "-";
     return first +de + second + de + middle + de + last;
  }

}
