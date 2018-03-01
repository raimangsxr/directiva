import { Component, OnInit } from '@angular/core';
import {SocioService} from "../services/socio.service";
import {Socio} from "../models/socio";
import {Router} from "@angular/router";

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  filteredSocios: Socio[];
  socios: Socio[];

  constructor(private socioService: SocioService, private router:Router) { }

  ngOnInit() {
    this.socioService.getSocios()
      .subscribe(socios => {
          this.socios = socios;
          this.filteredSocios = socios;
        }
      );
  }

  searchSocios(input:string): void {
    var tittles = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç";
    var original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
    this.filteredSocios = this.socios.filter(socio => {
      let socioName = socio.getFullname();
      for (var i = 0; i < tittles.length; i++) {
        input = input.replace(tittles.charAt(i), original.charAt(i)).toLowerCase();
        socioName = socioName.replace(tittles.charAt(i), original.charAt(i)).toLowerCase();
      };
      return socioName.includes(input)
    });
  }

  detailSocio(socio:Socio):void {
    this.router.navigate(['/socios/'+socio.id]);
  }
}
