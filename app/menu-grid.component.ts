import { Component } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { Character } from './character';
import { CharactersComponent } from './characters.component';
@Component({
  selector: 'my-menu-grid',
  templateUrl: 'app/menu-grid.component.html',
  styleUrls: ['app/menu-grid.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class MenuGridComponent {
    constructor(private router: Router){ }
    gotoLink() {
        this.router.navigate(['Characters']);
    }
 }
