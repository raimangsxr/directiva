import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {SocioService} from "../services/socio.service";
import {Socio} from "../models/socio";

@Component({
  selector: 'app-socios-detail',
  templateUrl: './socios-detail.component.html',
  styleUrls: ['./socios-detail.component.css']
})
export class SociosDetailComponent implements OnInit {

  socio: Socio;

  constructor(private route: ActivatedRoute, private socioService: SocioService, private location: Location) { }

  ngOnInit() {
    this.getSocio();
  }

  getSocio() {
    var id = +this.route.snapshot.paramMap.get('id');
    this.socioService.getSocio(id)
      .subscribe(socio => this.socio = socio);
  }

  goBack() {
    this.location.back();
  }

}
