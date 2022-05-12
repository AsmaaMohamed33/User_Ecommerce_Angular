import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CartComponent } from './Component/cart/cart.component';
 import { MainLyoutComponent } from './Component/main-lyout/main-lyout.component';
 import { NotFoundComponent } from './Component/not-found/not-found.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component:MainLyoutComponent, children: [
    {path:'', redirectTo:'/Home', pathMatch:'full'},
    {path:'Home', component:HomeComponent},
     // {path:'Product',component:ProductsComponent},
   // {path:'Products/:pid', component:ProductDetailsComponent},
    {path:'Order', component:CartComponent},  
] },

{
  path:'Product',
  loadChildren : ()=> import ('src/app/Component/product-module/product-module.module').then (m => m.ProductModuleModule)
},

{path:'**', component:NotFoundComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
