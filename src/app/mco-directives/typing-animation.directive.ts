import { Directive, ElementRef,  } from '@angular/core';
import Typed from 'typed.js';

@Directive({
  selector: '[typingAnimate]'
})
export class TypingAnimationDirective {
textToBeAnimated : string[];
typed : any;
test : string = "hello";
  constructor(private el : ElementRef) { 
  }

  ngOnInit(){
    this.textToBeAnimated = this.el.nativeElement.innerText.split("%%");
    this.el.nativeElement.innerText = "";
    var options = {
      strings: this.textToBeAnimated,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      showCursor:false,
      startDelay: 1000,
    }
    
    this.typed = new Typed(".animate-type", options);
  }

}
