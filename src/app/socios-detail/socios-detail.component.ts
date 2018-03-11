import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {Socio} from '../models/socio';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-socios-detail',
  templateUrl: './socios-detail.component.html',
  styleUrls: ['./socios-detail.component.css']
})
export class SociosDetailComponent implements OnInit {

  socio: Socio;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private location: Location) { }

  ngOnInit() {
    this.getSocio();
  }

  getSocio() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getMember(id)
      .subscribe(socio => this.socio = socio);
  }

  goBack() {
    this.location.back();
  }

}
