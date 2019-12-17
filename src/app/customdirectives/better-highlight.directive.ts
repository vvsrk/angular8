import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input()
  //defaultColor: string = 'transparent';
  defaultColor: string;

  @Input()
  highlightColor: string;

  //using HostBinding() to capture the property of the Host Element
  @HostBinding('style.backgroundColor')
  backgroundColor: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    //this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow');
  }

  //using HostListener() to capture the event of the Host Element
  @HostListener('mouseenter')
  mouseover(eventData: Event) {
    //this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = this.defaultColor;
  }


}
