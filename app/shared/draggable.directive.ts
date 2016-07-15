import { Directive, Component, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';
/* Directive to provide draggable functionality
 * with JQuery integration. Apply this directive to a list.
 */

declare var jQuery:any;

@Directive({
    selector: '[draggable]'
})

export class DraggableDirective implements OnInit {
    @Input()
    onStart: Function;

    @Input()
    onDrag: Function;

    @Input()
    onStop: Function;

    elementRef: ElementRef;
    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        jQuery(this.elementRef.nativeElement)
            .draggable({
                stop: function() {
                    alert("someone is being dropped");
                }
            });
    }
}
