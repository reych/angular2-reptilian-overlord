import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Character } from '../character-model';
import { CharacterService } from '../shared'

@Component({
    selector: 'my-edit-character',
    templateUrl: 'app/edit-character/edit-character.component.html',
    styleUrls: ['app/edit-character/edit-character.component.css']
})

export class EditCharacterComponent implements OnInit{
    @Input()
    character: Character;

    @Output()
    close = new EventEmitter();

    title: string;
    error: any;
    tempAffiliation: string;

    constructor(
        private characterService: CharacterService
    ){ }

    ngOnInit() {
        if(!this.character) {
            this.character = new Character();
            this.character.affiliation = -1;
            this.tempAffiliation = "-1";
            this.title = "New Character:";
        } else {
            this.title = "Editing";
            this.tempAffiliation = this.character.affiliation.toString();
        }
    }

    save() {

        this.character.affiliation = parseInt(this.tempAffiliation);
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
        this.close.emit(event);
    }
}
