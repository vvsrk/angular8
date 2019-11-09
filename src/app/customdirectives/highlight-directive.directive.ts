import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective implements OnInit{


  constructor(private element: ElementRef) {

  }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'green';
  }

}
