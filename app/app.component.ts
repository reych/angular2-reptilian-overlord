import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { Character } from './character-model/';
import { CharactersComponent } from './characters';
import { MenuGridComponent } from './menu-grid';
import { CharacterService } from './shared';
import { UniverseMapComponent } from './maps'
@Component({
    selector: 'my-app',
    template: `
        <div class="overall-wrapper">
            <h1 [routerLink]="['MenuGrid']">Reptilian Overlord</h1>
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
        .overall-wrapper {
            background-color: #222;
            text-align: center;
        }
        h1 {
            cursor: pointer;
        }
        `],
  directives: [ROUTER_DIRECTIVES],
  providers: [
      ROUTER_PROVIDERS,
      CharacterService]
})

@RouteConfig([
    {
        path: '/menu',
        name: 'MenuGrid',
        component: MenuGridComponent,
        useAsDefault: true
    },
    {
      path: '/characters',
      name: 'Characters',
      component: CharactersComponent
    },
    {
      path: '/maps',
      name: 'Maps',
      component: UniverseMapComponent
    }

])
export class AppComponent {
    constructor(private characterService: CharacterService) { }
 }
