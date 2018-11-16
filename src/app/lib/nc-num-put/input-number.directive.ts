/**
 * Created by liuxuwen on 18-11-17.
 */
import { Directive, ElementRef,HostListener,Input  } from '@angular/core';

@Directive({
    selector: '[inputNumber]'
})
export class InputNumberDirective {
    @Input('inputNumber') max_number: number;

    constructor(private el: ElementRef) {
    }

    @HostListener('keyup') onkeyup() {
        if(!Number(this.el.nativeElement.value) ||
            (Number(this.el.nativeElement.value) > this.max_number)) {
            this.el.nativeElement.value = this.max_number;
        }
    }

    @HostListener('paste') onPaste() {
        return false;
    }

    @HostListener('keypress') onkeypress() {
        return true;
    }

    @HostListener('keydown') onkeydown() {
        return true;
    }
}