import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() color: string;

  constructor(
    private element: ElementRef
  ) { }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'red';
    this.element.nativeElement.style.color = this.color;
  }

}
