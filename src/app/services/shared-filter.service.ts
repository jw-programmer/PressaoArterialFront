import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PressaoFilter } from '../models/pressao-filter.dto';

@Injectable({
  providedIn: 'root'
})
export class SharedFilterService {
  private pressaoFilter$ = new BehaviorSubject<any>({});
  pressaoFiltered$ = this.pressaoFilter$.asObservable();

  constructor() { }

  
  setPressaoFilter(pressaoFilter: PressaoFilter) {
    this.pressaoFilter$.next(pressaoFilter);
  }
}
