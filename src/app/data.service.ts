import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

import {ITovari, ISprv} from './data';

@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

  getTovari(): Observable<ITovari[]> {
    return this.http.get('assets/db/tovari.json')
      .map(response => response.json())
  }

  getSpravochnik(): Observable<ISprv[]> {
    return this.http.get('assets/db/spravochnik.json')
      .map(response => response.json())
  }
}

export var ControlPanelFilters = {
  kodTovara: <number> 999,
  nomerSklada: <number> 999
};

export const ALL_TOVARI = {
  KODT: <number> 999,
  NAMET: <string>'Всі товари'
};
