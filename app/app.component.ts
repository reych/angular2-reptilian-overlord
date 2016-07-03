import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { Character } from './character';
import { CharactersComponent } from './characters.component';
import { MenuGridComponent } from './menu-grid.component';
import { CharacterService } from './character.service'
@Component({
    selector: 'my-app',
    template: `
        <div class="overall-wrapper">
            <h1>Reptilian Overlord</h1>
            <a [routerLink]="['MenuGrid']">Menu</a>
            <a [routerLink]="['Characters']">People</a>
            <router-outlet></router-outlet>
        </div>
    `,
    styles: [`
        .overall-wrapper {
            background-color: #222;
            text-align: center;
        }
        `],
  directives: [ROUTER_DIRECTIVES],
  providers: [
      ROUTER_PROVIDERS,
      CharacterService]
})

@RouteConfig([
  {
      path: '/characters',
      name: 'Characters',
      component: CharactersComponent
  },
  {
      path: '/menu',
      name: 'MenuGrid',
      component: MenuGridComponent,
      useAsDefault: true
  }

])
export class AppComponent {
    constructor(private characterService: CharacterService) { }
 }
