import { Injectable } from '@angular/core';
import { IProduct } from '../ViewModel/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private ProductList: IProduct[];

  constructor() {
    this.ProductList = [
      { id: 1,name: 'Iphone ', price: 10000, quantity: 10, img: 'assets/1.jpg', CategoryID: 1 },
      {  id: 5,name: 'Samsung', price: 5200,quantity: 0, img: 'assets/1.jpg', CategoryID: 1 },
      {  id: 10,name: 'Samsung', price: 6300, quantity: 1, img:'assets/1.jpg', CategoryID: 2 },
      { id: 12, name: 'IPad', price: 4000, quantity: 2, img:'assets/1.jpg', CategoryID: 2 },
      { id: 15,name: 'Redmi', price: 10500, quantity: 10, img:'assets/1.jpg', CategoryID: 3 },
      { id: 17,name: 'Lab', price: 29000,quantity: 0, img:'assets/1.jpg', CategoryID: 3 }
    ];
   }

   getProducts(): IProduct[] {
    return this.ProductList;
  }

  getProductsByCateogryID(CategoryID: number): IProduct[] {
    if (CategoryID == 0) {
      return this.ProductList;
    }
    else
      return this.ProductList.filter(prd => prd.CategoryID == CategoryID);
  }

  getProductByID(prdID: number): IProduct|undefined
  {
    return this.ProductList.find(prd=>prd.id==prdID);
  }


 GetArrOfIDs(): number[]
  {
  return this.ProductList.map(prd=>prd.id);
 }

}
