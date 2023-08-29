import { Injectable } from '@angular/core';
import { genID } from './gen-id.generator';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  private characterSet: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  private idGenerator: Generator<number>;

  constructor() {
    this.idGenerator = genID();
  }

  generate(n: number): string {
    const characterSetLength = this.characterSet.length;

    const result = Array.from({ length: n }, () => {
      const randomIndex = Math.floor(Math.random() * characterSetLength);
      return this.characterSet[randomIndex];
    }).join('');

    return result;
  }

  getNewID(): number {
    return this.idGenerator.next().value;
  }
}
