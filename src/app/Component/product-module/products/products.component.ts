import { Component, EventEmitter, HostListener, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/ViewModel/ICategory';
import { IProduct } from 'src/app/ViewModel/IProduct';
import { Showing } from 'src/app/ViewModel/Showing';
import { Store } from 'src/app/ViewModel/Store';
import { CartComponent } from '../../cart/cart.component';
import { ShoppingCart } from 'src/app/ViewModel/ShoppingCart';
import{ ProductServiceService} from 'src/app/Services/product-service.service'
import { APIproductService } from 'src/app/Services/ApiServices/apiproduct.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CartAPIService } from 'src/app/Services/cart-api.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:any ;
 ProductInfo : IProduct[];
 
  StoreInfo : Store;
  ClintName : string ;
  CategoryInfo : ICategory[];
  ISTableShow :boolean= true;
  IsDivShow :boolean=false;
  ISChoosen :boolean = true
  todayDate: Date = new Date();
  @Input() receivedSelCatID:number=0;
  SelectedCatID : number= 0;
   chooseList :IProduct[]=[];
  cardNamber :string = "0000000000000000";
  nationalID : string = "";
  OrderPrice :number =0;
  prdQun :number =0
   @Output() TotalPrice: EventEmitter<number>;
  @Output() PrdName : EventEmitter <string>;
  @Output() prdPrice : EventEmitter <number>;
  @Output() prdImg : EventEmitter <string>;
  @Output() prdQuan : EventEmitter <number>;
  @Output() newItemEvent : EventEmitter <any>;
  @Input('LightBox') highlightColor:string="Yallow";

  ShoppingList : ShoppingCart;
  ProductId:number = 0;
  NewPrduct: IProduct={} as IProduct;


  
  constructor(private prodService:ProductServiceService,
    private prdAPIService:APIproductService,
    private router :Router,
    private dialog :MatDialog
    , private activatedRoute:ActivatedRoute,
    private cartService : CartAPIService) { 
    this.ClintName = "Asmaa",
   
  
    this.TotalPrice= new EventEmitter<number>();
    this.PrdName= new EventEmitter<string>();
    this.prdPrice= new EventEmitter<number>();
    this.prdImg= new EventEmitter<string>();
    this.prdQuan= new EventEmitter<number>();
    this.newItemEvent= new EventEmitter<any> ();


    this.ShoppingList=
      { PrdID :0 , PrdName :" " , PrdPrice:0 , PrdImg:" " , PrdQuantaty:0},
    
   this.ProductInfo=[
     {  id :1, name :"Apple", price:10000, quantity:3, CategoryID:1, img:'assets/lab.jpg' },
    {   id :2,  name :"Nokia",  price:5000, quantity:1, CategoryID:1, img:"assets/1.jpg"},
    {  id :3,  name :"Samsung",  price:6000, quantity:5, CategoryID:2, img:"assets/1.jpg" },
    {   id :4,  name :"Nokia", price:2000, quantity:5,  CategoryID:2,  img:"assets/lab.jpg" }
  ],

    

    this.StoreInfo={
      Name: "ITI Store",
      Logo: '',
      branches: ["Cairo", "Alex", "Asyut", "Sohag", "Qena"]
    },
    this.CategoryInfo=[
     { ID :1, Name :"Iphone"   }, { ID:2, Name:"Noki"} , { ID:3 , Name:"Sumsung"}]  

     
    }
  

  ngOnInit(): void {
   // this.chooseList =this.prodService.getProductsByCateogryID(this.receivedSelCatID);
   // this.prdAPIService.getAllProducts().subscribe(prdList=>{
   //this.chooseList=prdList;

   this.prdAPIService.getAllProducts().subscribe(prdList=>{
    this.chooseList=prdList;

    console.log(this.chooseList);

   this.ProductId=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
   if(this.ProductId!=0)
   {
      this.prdAPIService.getProductByID(this.ProductId).subscribe(prd=>{
    this.NewPrduct=prd;
      });
  }
  
  });

  }

  toggletable()
  {
    this.ISTableShow= !this.ISTableShow;
  }
   


  
  ShowProducts(ID :number)
  {
    this.chooseList=[];
    for (let item of this.ProductInfo)
    {
      if (item.CategoryID==ID)
      this.chooseList.push(item)
    }
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    if (this.receivedSelCatID==0 )
    {
      
     // this.chooseList=this.ProductInfo;
    // this.chooseList=this.prodService.getProducts();
    this.prdAPIService.getAllProducts().subscribe(prdList=>{
      this.chooseList=prdList;
    });

    }
    else
     // this.chooseList=this.ProductInfo.filter(prd=> prd.CategoryID==this.receivedSelCatID);*/

     /* this.chooseList =this.prodService.getProductsByCateogryID(this.receivedSelCatID);
      console.log(this.chooseList);*/

      this.prdAPIService.getProductsByCatID(this.receivedSelCatID).subscribe(prdList=>{
        this.chooseList=prdList;
      
  });
}




 /*selectCat(){
      if (this.SelectedCatID==0)
      {
        this.chooseList=this.ProductInfo;
      }
      
      else
      {
        this.chooseList= this.ProductInfo.filter((el)=> {
          return el.CategoryID ==this.SelectedCatID
        });
      }
   
  }*/

   
  de ( item :IProduct){
 
    item.quantity--;

}

SendOrder(itemsCount:number, Price:number , prdlist :IProduct)
{
 
  

  if (itemsCount <= prdlist.quantity && itemsCount!=0)
  {

 
   this.OrderPrice+= (itemsCount*Price);
 
   prdlist.quantity =prdlist.quantity- itemsCount;
 
  //Emit Event
  this.TotalPrice.emit(this.OrderPrice);

  
   this.PrdName.emit(prdlist.name);
  this.prdPrice.emit(prdlist.price);
  this.prdImg.emit(prdlist.img);
  this.prdQuan.emit(itemsCount);
  this.newItemEvent.emit(prdlist);
  
 
}
}


AddOrder (item : IProduct , itemsCount: number ,Price:number)
{

  if (itemsCount <= item.quantity && itemsCount!=0)
  {
    this.OrderPrice+= (itemsCount*Price);
 
    item.quantity =item.quantity- itemsCount;

 
   this.OrderPrice+= (itemsCount*Price);
   this.ShoppingList.PrdID = item.id ;
   this.ShoppingList.PrdName= item.name ;
   this.ShoppingList.PrdPrice = item.price;
   this.ShoppingList.PrdQuantaty=itemsCount;
   this.ShoppingList.PrdImg= item.img;
   this.newItemEvent.emit(this.ShoppingList)
   this.TotalPrice.emit(this.OrderPrice);
}

}

viewchiled(item : IProduct , itemsCount: number)
{
  item.quantity =item.quantity- itemsCount;
}




DeleteProduct(id :any)
{
   this.prdAPIService.deleteProduct(id).subscribe(prd => {
     this.router.navigate(['/Product']) 
   });
  
}

OpenDialog ()
{
  this.dialog.open(ProductsComponent);
}

addtocart(item: any){
  this.cartService.addtoCart(item);
}



}