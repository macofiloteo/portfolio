import { Directive, ElementRef,  } from '@angular/core';

@Directive({
  selector: '[typingAnimate]'
})
export class TypingAnimationDirective {
textToBeAnimated : string;
test : string = "hello";
  constructor(private el : ElementRef) { 
  }

  ngOnInit(){

    this.textToBeAnimated = this.el.nativeElement.innerText;
    console.log(this.el.nativeElement.innerText);
    this.el.nativeElement.innerText = "";

    var animateCallback = (i, lengthOfString) => {
      setTimeout(() => {
        var index0 = lengthOfString - i;
        this.el.nativeElement.innerText = this.el.nativeElement.innerText + this.textToBeAnimated[index0];
        if (--i) {                  // If i > 0, keep going
          animateCallback(i, lengthOfString);  // Call the loop again
        }
      }, 300);
    }

    animateCallback(this.textToBeAnimated.length, this.textToBeAnimated.length);
    alert("done");
  }

  timeout(delay) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, delay);
    });
}
  
}
