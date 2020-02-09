import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[RegexValidator]'
})
export class RegexValidatorDirective implements OnChanges{
  @Input("RegexValidator") data: any;
  constructor(public el: ElementRef) {
  }
  ngOnChanges(){
    this.el.nativeElement.onkeypress = event => {
      if(!(new RegExp(this.data).test(String.fromCharCode(event.which)))){
         event.preventDefault();
      }
    }
  }
  }
  
