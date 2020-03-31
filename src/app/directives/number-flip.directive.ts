import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnChanges,
    SimpleChanges
} from "@angular/core";
import { Flip } from "number-flip";

@Directive({
    selector: "[appNumberFlip]"
})
export class NumberFlipDirective implements OnChanges {
    private flipper;

    constructor(private el: ElementRef) { }

    @Input("appNumberFlip") numberFlip: number;

    ngOnChanges(changes: SimpleChanges) {

        const change = changes.numberFlip;
        let fromNbr = change.previousValue;

        if (this.flipper === undefined) {
            this.flipper = new Flip({
                node: this.el.nativeElement,
                from: fromNbr,
                to: 99
            });
        } else {
            console.log(change.currentValue);
            this.flipper.flipTo({
                node: this.el.nativeElement,
                from: change.previousValue,
                to: change.currentValue
            });
        }
    }
}