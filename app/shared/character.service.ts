import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Character } from '../character-model';

@Injectable()
export class CharacterService {
    private charactersUrl = 'app/characters';

    constructor(private http: Http) { }

    getCharacters(): Promise<Character[]> {
        return this.http.get(this.charactersUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    // Save Character
    save(character: Character): Promise<Character>  {
      if (character.id) {
        return this.put(character);
      }
      return this.post(character);
    }

    // Add new character
    private post(character: Character): Promise<Character> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.charactersUrl, JSON.stringify(character), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    // Update existing character
    private put(character: Character) {
        let headers = new Headers();
        headers.append('Content-Type','application/json');

        let url = `${this.charactersUrl}/${character.id}`;

        return this.http
            .put(url, JSON.stringify(character), {headers: headers})
            .toPromise()
            .then(() => character)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
  }
}
