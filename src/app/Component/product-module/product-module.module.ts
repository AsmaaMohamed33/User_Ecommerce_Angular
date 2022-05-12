import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { RouterModule, Routes } from '@angular/router';

const routes :Routes =[

  {path:'Products', component : ProductsComponent},
   {path:'Products/:pid', component:ProductsDetailsComponent},
]

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule, 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class ProductModuleModule { }
