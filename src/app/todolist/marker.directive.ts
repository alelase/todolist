import {Directive, ElementRef, Renderer, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[marker]'
})


export class MarkerDirective {

  constructor(element: ElementRef, renderer: Renderer) {
    // console.log(element.nativeElement.addEventListener());
    //too much code - use decoretor instead
    renderer.listen(element.nativeElement, 'mouseover', () => {
      renderer.setElementStyle(element.nativeElement, 'background-color', 'yellow');
    });

    renderer.listen(element.nativeElement, 'mouseout', () => {
      renderer.setElementStyle(element.nativeElement, 'background-color', '');
    });
  }

  // @HostBinding() style = '';
  //
  // @HostListener('mouseover')
  // public setBackground() {
  //   console.log('setBackground');
  //   this.style = 'background-color: yellow';
  // }
  //
  // @HostListener('mouseout')
  // public removeBackground() {
  //   console.log('removeBackground');
  //   this.style = 'background-color:';
  // }

}
