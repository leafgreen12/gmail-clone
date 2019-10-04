import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appUpperCase]'
})
export class UppercaseDirective implements OnInit {
  @Input('appUpperCase') textTransform: string;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.textTransform = this.textTransform;
  }
}
