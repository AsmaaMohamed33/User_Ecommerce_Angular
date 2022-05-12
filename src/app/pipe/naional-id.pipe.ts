import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'naionalID'
})
export class NaionalIDPipe implements PipeTransform {

  transform(value:any): any {

    var month =  value.slice(2,4) ;
    var day = value.slice(4,6);
    var year = value.slice(0,2);
    var BirthDate =  value.slice(4,6)+"/" +  value.slice(2,4) + "/20" +value.slice(0,2) ;
    if (month)
    {
      return `the month is ${month}`;
    }
    else if (day)
    {
      return `the day is ${day}`;
    }
    else if (year)
    {
      return `the year is ${year}`;
    }
    else {
      return `the FullDate is  ${BirthDate}`;
    }
    
 }

}


/*if (value.slice(1,3)<20)
    {
      return value.slice(4,6)+"/" +  value.slice(2,4) + "/20" +value.slice(0,2) ;
    }
    else{
      return value.slice(4,6)+"/" +  value.slice(2,4) + "/19" +value.slice(0,2) ;
    }*/
    