import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ProductCard]'
})
export class LightBoxDirective {
  
  defualtColor :string = "red";
 
  constructor(private elemRef: ElementRef , private  renderer : Renderer2 )  {
   }

   @HostListener('mouseover') onMouseOver()
  {
    this.elemRef.nativeElement.style.shadow = `10px 20px 30px ${this.defualtColor}`;
  }

  @HostListener('mouseout') onMouseOut()
  {
    this.elemRef.nativeElement.style.shadow = `10px 20px 30px ${this.defualtColor}`;
  }
}
