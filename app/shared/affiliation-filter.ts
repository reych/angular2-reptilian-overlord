import {Injectable, Pipe, PipeTransform} from '@angular/core';
import { Character } from '../character-model';

@Pipe({
    name: 'affiliationFilter'
})
export class AffiliationFilter implements PipeTransform {
    transform(characters: Character[], args: number) {
        if(characters != undefined) {
            let something = characters.filter(character => character.affiliation === args);
            return characters.filter(character => character.affiliation === args);
        }

    }
}
