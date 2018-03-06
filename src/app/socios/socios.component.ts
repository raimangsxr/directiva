import { Component, OnInit } from '@angular/core';
import {SocioService} from '../services/socio.service';
import {Socio} from '../models/socio';
import {Router} from '@angular/router';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  filteredSocios: Socio[] = [];
  socios: Socio[] = [];

  constructor(private apiService: ApiService, private socioService: SocioService, private router: Router) { }

  ngOnInit() {
    this.apiService.getMembers()
      .subscribe(socios => {
          this.socios = socios;
          this.filteredSocios = socios;
        },
        error => {
          console.error(error);
        }
      );
  }

  searchSocios(input: string): void {
    const tittles = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç';
    const original = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc';
    this.filteredSocios = this.socios.filter(socio => {
      let socioName = socio.getFullname();
      for (var i = 0; i < tittles.length; i++) {
        input = input.replace(tittles.charAt(i), original.charAt(i)).toLowerCase();
        socioName = socioName.replace(tittles.charAt(i), original.charAt(i)).toLowerCase();
      }
      return socioName.includes(input);
    });
  }

  detailSocio(socio: Socio): void {
    this.router.navigate(['/socios/' + socio.id]);
  }
}
