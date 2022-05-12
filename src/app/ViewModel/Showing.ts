
import {IProduct} from "./IProduct"
import { Store} from "./Store"
import {ICategory} from "./ICategory"


export class Showing {
    store : Store;
    ClintName : String;
    ProductList : IProduct[];

    constructor ( store: Store , clintName: String , ProductList: IProduct[])
    {
        this.store = store ;
        this.ClintName = clintName ;
        this.ProductList = ProductList;
    }

}
    



