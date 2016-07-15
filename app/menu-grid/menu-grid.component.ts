import { Component } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { Character } from '../character-model';
import { CharactersComponent } from '../characters';
@Component({
  selector: 'my-menu-grid',
  templateUrl: 'app/menu-grid/menu-grid.component.html',
  styleUrls: ['app/menu-grid/menu-grid.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class MenuGridComponent {
    constructor(private router: Router){ }
    gotoLink(link: string) {
        this.router.navigate([link]);
    }
 }
