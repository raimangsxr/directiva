import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Socio} from "../models/socio";
import {SOCIOS} from "../mock-socios";

@Injectable()
export class SocioService {

  constructor() { }

  getSocios(): Observable<Socio[]> {
    return of(SOCIOS);
  }

  getSocio(id: number): Observable<Socio> {
    return of(SOCIOS.find(socio => socio.id === id));
  }
}
