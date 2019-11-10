import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

  @HostBinding('class.open')  //class is array of all classes and open is our css class which needs to bind when ever isOpen changes
  isOpen = false;
  constructor(private hostElement: ElementRef, private renderer: Renderer2) {
  }


/*
  // 1. Using HostListener and Renderer
  @HostListener('click')
  toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
    console.log("mouseenter"+this.hostElement.nativeElement);
    this.renderer.addClass(this.hostElement.nativeElement, 'open');
  }
*/

  @HostListener('click')
  toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
  }





  ngOnInit(): void {
  }
}
