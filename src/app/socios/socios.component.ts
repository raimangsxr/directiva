import { Component, OnInit } from '@angular/core';
import {SocioService} from "../services/socio.service";
import {Socio} from "../models/socio";

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  socios: Socio[];

  constructor(private socioService: SocioService) { }

  ngOnInit() {
    this.socioService.getSocios()
      .subscribe(socios => this.socios = socios);
  }

}
