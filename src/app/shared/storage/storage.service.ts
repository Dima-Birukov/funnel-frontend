import {Injectable, InjectionToken} from '@angular/core';
import {createTokenForReference} from '@angular/compiler/src/identifiers';

const Storage = new InjectionToken(
  'key for local storage',
  {providedIn: 'root', factory: () => localStorage}
);
@Injectable()
export class StorageService {
  saveAnswerLocally(questionID: string, event: any): void{
    localStorage.setItem(questionID, (event.target as HTMLInputElement).value);
  }
}
