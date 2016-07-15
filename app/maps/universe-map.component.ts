import { Component, OnInit, ElementRef } from '@angular/core';
import { Planet } from './planet';

declare var jQuery:any;

@Component({
    selector: 'my-universe-map',
    templateUrl: 'app/maps/universe-map.component.html',
    styleUrls: ['app/maps/universe-map.component.css']
})

export class UniverseMapComponent implements OnInit {
    elementRef: ElementRef;
    planetArray: Planet[] = PLANETS_ARRAY;
    hoverPlanet: string;
    selectedPlanet: Planet;
    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        jQuery(this.elementRef.nativeElement)
            .draggable();
    }
    findPosition() {
        jQuery("div").scrollTop(900);
    }
    hoverText(name: String) {
        this.hoverPlanet = name;
    }
    selectPlanet($event, planet: Planet, isButton: boolean) {
        if(isButton) {
            $event.stopPropagation();
        }
        this.selectedPlanet = planet;
    }
}

const PLANETS_ARRAY: Planet[] = [
    {
        name: 'Saturn',
        description: 'A planet with rings around it',
        imgUrl: 'app/maps/saturn-icon.png',
        x: 50,
        y: 1000
    },
    {
        name: 'Mercury',
        description: 'Pretty red planet conquered by Your Majesty!',
        imgUrl: 'app/maps/mercury.png',
        x: 400,
        y: 500
    },
    {
        name: 'Mars',
        description: 'Some say the the God of War himself resides in that planet.'
        +' Not that it stopped you from taking it, O Dreadful One.',
        imgUrl: 'app/maps/mars.png',
        x: 2030,
        y: 760
    }
]
