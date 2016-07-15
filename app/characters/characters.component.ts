import { Component, OnInit, trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';

import { Character } from '../character-model';
import { CharacterService, AffiliationFilter, SortableDirective, DraggableDirective } from '../shared';
import { EditCharacterComponent} from '../edit-character';
@Component({
  selector: 'my-characters',
  templateUrl: 'app/characters/characters.component.html',
  styleUrls: ['app/characters/characters.component.css'],
  pipes: [AffiliationFilter],
  directives: [EditCharacterComponent,
                SortableDirective,
                DraggableDirective]
})
export class CharactersComponent implements OnInit {
    // Data
    charactersArray: Character[];
    alliesArray: Character[];
    neutralsArray: Character[];
    enemiesArray: Character[];
    error: any;
    selectedCharactersArray: number[] = [];
    characterToEdit: Character;
    currentDragged: Character;

    // State variables
    selectedAffiliation: number = -1;
    bigScreen: boolean = false;
    editingCharacter: boolean = false;

    // "Constant values"
    ally: number = 1;
    neutral: number = 0;
    enemy: number = -1;

    // Random
    width: number;

    constructor(
        private characterService: CharacterService
    ){ }

    ngOnInit() {
        this.getCharacters();
        this.width = window.innerWidth;
        this.adjustToSize();
    }

    onResize(event) {
        this.adjustToSize();
    }

    adjustToSize() {
        this.width = window.innerWidth;
        if(window.innerWidth > 734) {
            this.bigScreen = true;
        } else {
            this.bigScreen = false;
        }
    }

    onSelectAffiliation(affiliation: number){
        this.selectedAffiliation = affiliation;
    }

    onToggleCharacter(id: number){
        let index = this.selectedCharactersArray.indexOf(id);
        // if in array, remove
        if(index > -1) {
            this.selectedCharactersArray.splice(index, 1);
        } else {
            this.selectedCharactersArray.push(id);
        }
    }

    onAddNew() {
        this.characterToEdit = null;
        this.editingCharacter = true;
    }

    setCharacterToEdit(character: Character) {
        this.characterToEdit = character;
        this.editingCharacter = true;
    }

    isSelectedCharacter(id: number){
        if(this.selectedCharactersArray.indexOf(id) > -1) {
            return true;
        } else {
            return false;
        }
    }

    allySelected() {
        if(this.selectedAffiliation === this.ally){
            return true;
        }
        return false;
    }

    neutralSelected() {
        if(this.selectedAffiliation === this.neutral){
            return true;
        }
        return false;
    }

    enemySelected() {
        if(this.selectedAffiliation === this.enemy){
            return true;
        }
        return false;
    }

    getCharacters() {
        this.characterService
            .getCharacters()
            .then(characters => this.charactersArray = characters)
            .catch(error => this.error = error);
    }
    close() {
      this.getCharacters();
      this.editingCharacter = false;
    }

    onDrop(event) {
        alert(" has been dropped");
    }

    onDrag() {
        alert("Someone is being dragged");
    }



}
