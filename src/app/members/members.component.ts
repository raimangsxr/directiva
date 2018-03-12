import { Component, OnInit } from '@angular/core';
import {Member} from '../models/member';
import {Router} from '@angular/router';
import {ApiService} from '../services/api.service';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  filteredMembers: Member[] = [];
  members: Member[] = [];

  constructor(private apiService: ApiService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.apiService.getMembers()
      .subscribe(members => {
          this.members = members;
          this.filteredMembers = members;
        },
        error => {
          console.error('MembersComponent: ' + JSON.stringify(error));
          this.snackBar.open('Error cargando socios..', 'Cerrar', { duration: 3000 });
        }
      );
  }

  searchMembers(input: string): void {
    const tittles = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç';
    const original = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc';
    this.filteredMembers = this.members.filter(member => {
      let memberName = member.getFullname();
      for (var i = 0; i < tittles.length; i++) {
        input = input.replace(tittles.charAt(i), original.charAt(i)).toLowerCase();
        memberName = memberName.replace(tittles.charAt(i), original.charAt(i)).toLowerCase();
      }
      return memberName.includes(input);
    });
  }

  detailMember(member: Member): void {
    this.router.navigate(['/members/' + member.id]);
  }
}
