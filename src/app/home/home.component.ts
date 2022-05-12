import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/ViewModel/Store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  storeInfo: Store;
  isImgShown:boolean=true;
  constructor() {
    this.storeInfo={
       Name: "ITI Store",
        Logo: 'https://fakeimg.pl/250x100/',

         branches: ["Cairo", "Alex", "Asyut", "Sohag", "Qena"]
    };
   }

  ngOnInit(): void {
  }

  toggleImg()
  {
    this.isImgShown= !this.isImgShown;
  }

}
