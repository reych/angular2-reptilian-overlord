import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Character } from './character';
import { CharacterService } from './character.service'

@Component({
    selector: 'my-edit-character',
    templateUrl: 'app/edit-character.component.html',
    styleUrls: ['app/edit-character.component.css']
})

export class EditCharacterComponent implements OnInit{
    @Input()
    character: Character;

    @Output()
    close = new EventEmitter();

    title: string;
    error: any;

    constructor(
        private characterService: CharacterService
    ){ }

    ngOnInit() {
        if(!this.character) {
            this.character = new Character();
            this.character.affiliation = -1;
            this.title = "New Character:";
        } else {
            this.title = "Editing";
        }
    }

    save() {
        this.character.affiliation = parseInt(this.character.affiliation);
        let date = new Date();
        if(!this.character.id) {
            this.character.id = date.getTime();
        }
        this.characterService
        .save(this.character)
        .then(character => {
            this.character = character; // saved hero
        })
        .catch(error => this.error = error);

        //alert("Saving: "+this.character.name+", "+this.character.affiliation+", "+this.character.id);
        this.closeWindow();
    }

    closeWindow() {
        this.close.emit();
    }
}
