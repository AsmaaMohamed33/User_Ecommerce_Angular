import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, Observable, retry } from 'rxjs';
import { IProduct } from 'src/app/ViewModel/IProduct';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIproductService {

  PathUrl='http://localhost:7692/api';
private OptionsHttp;
  constructor(private httpClient :HttpClient)
    {
      this.OptionsHttp={
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
         
        })
        }         
}

NewProduct :IProduct={"id":0 , "name":" " ,"img":" ","quantity":0,"price":0,"CategoryID":0}



getAllProducts() : Observable <IProduct[]>

{
  return this.httpClient.get<IProduct[]>(`${environment.APIURL}/Product`)      
}



getProductsByCatID(catID: number): Observable <IProduct[]>
{
  return this.httpClient.get<IProduct[]>(`${environment.APIURL}/Product?CategoryID=${catID}`);
}

getProductByID(prdID: number): Observable <IProduct>
{
  return this.httpClient.get<IProduct>(`${environment.APIURL}/Product/${prdID}`);
}

addNewProduct(newPrd: IProduct): Observable <IProduct>
{
  return this.httpClient.post<IProduct>(`${environment.APIURL}/Product`, JSON.stringify(newPrd),this.OptionsHttp);
}


updateProduct(UpDatedProd :IProduct,prdID: number):Observable<IProduct>
{
  return this.httpClient.patch<IProduct>(`${environment.APIURL}/Product/${prdID}`, UpDatedProd);

}



deleteProduct(prdID:number ) 
{ 
   return this.httpClient.delete<IProduct>(`${environment.APIURL}/Product/${prdID}`, this.OptionsHttp);
}





}

