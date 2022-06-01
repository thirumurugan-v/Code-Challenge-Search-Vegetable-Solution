import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DataService {

  private vegetableNameSource = new BehaviorSubject<string>("");
  currentVegetableName = this.vegetableNameSource.asObservable();

  constructor() { }

  changeVegetableName(vegetable: string) {
    // add data to an observable
    this.vegetableNameSource.next(vegetable);
  }
}
