import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/ViewModel/ICategory';
import { IProduct } from 'src/app/ViewModel/IProduct';
import { ShoppingCart } from 'src/app/ViewModel/ShoppingCart';
import { ProductsComponent } from '../product-module/products/products.component';
import { CartAPIService } from 'src/app/Services/cart-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit ,AfterViewInit  {

  @ViewChild('ViewChild') ViewChild!: ElementRef;
  @ViewChild(ProductsComponent) Productview!: ProductsComponent;


  catList: ICategory[];
  selectedID:number=0;
  receivedOrderTotalPrice:number=0;
  receivedPrdName :string =" ";
  receivedPrdPrice :number=0;
  receivedPrdImg :string =" ";
  receivedPrdQua :number = 0;
  Cart :ShoppingCart[];

  
  Items : IProduct[];
  PrdObj : ShoppingCart = {
    PrdID : 0,
   PrdName:" ",
    PrdQuantaty : 0,
    PrdPrice : 0,
   PrdImg : " "  
  };

  public products : any = [];
  public grandTotal !: number;

  constructor( private cartService : CartAPIService) {
    this.catList=[
      {ID:1, Name: 'Tvs'},
      {ID:2, Name: 'Labs'},
      {ID:3, Name:'Mobiles'}
    ];
    this.Items= [];

    this.Cart=[];
  }

  ngAfterViewInit(): void {

    console.log(this.Productview.ProductInfo) 

    this.ViewChild.nativeElement.style.backgroundColor="red";
    console.log(this.ViewChild.nativeElement.value);
    console.log(this.Productview.ProductInfo)   
    
  }

  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

   updateTotalPrice(totalPrice: number)
  {
    this.receivedOrderTotalPrice=totalPrice;  
  }

  sendName (name :string)
  {
    this.receivedPrdName = name;
  }
  sendPrice (price :number)
  {
    this.receivedPrdPrice = price;
  }
  sendImg(Img : string)
  {
    this.receivedPrdImg = Img;
  }
  sendQun(Quan: number)
  {
    this.receivedPrdQua= Quan;
  }

  addItems (newItem: IProduct )
  {
   // newItem.Name = this.receivedPrdName;
    this.Items.push(newItem );
  /* this.receivedPrdName=newItem.Name;
   this.receivedPrdPrice= newItem.price;
   this.receivedPrdImg= newItem.Img;
   this.receivedPrdQua=newItem.Quantity;
    this.Items.push({ID:newItem.ID ,Name:newItem.Name ,Quantity:newItem.Quantity , price:newItem.price , Img:newItem.Img , CategoryID:newItem.CategoryID})
    console.log(newItem);
    console.log(this.Items);*/
     
  }

  getOrder (Product : ShoppingCart)
  {
    
    this.Cart.push({PrdID:Product.PrdID , PrdName:Product.PrdName , PrdPrice:Product.PrdPrice , PrdQuantaty:Product.PrdQuantaty , PrdImg:Product.PrdImg});
  }

  RemoveItem (item :ShoppingCart )
  {
    var index = this.Cart.findIndex( x => x.PrdID ==item.PrdID);
       this.Cart.splice(index,1);

       this. receivedOrderTotalPrice = 0 ;
       for (let item of this.Cart)
       {
         this. receivedOrderTotalPrice+= item.PrdPrice*item.PrdQuantaty;
                
     }
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }



}

