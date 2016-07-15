import { Directive, Component, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';
/* Directive to provide draggable/sortable functionality
 * with JQuery integration. Apply this directive to a list.
 */

declare var jQuery:any;

@Directive({
    selector: '[sortable]'
})

export class SortableDirective implements OnInit {
    @Output() dropped = new EventEmitter();

    elementRef: ElementRef;
    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        jQuery(this.elementRef.nativeElement)
            .sortable({connectWith: ".connectedSortable",
                update: function(event, ui) {
                    
                },
                items: "li:not(.sort-disabled)",
                dropOnEmpty: true
            });
    }
}
