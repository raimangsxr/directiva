import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {MemberService} from "../services/member.service";
import {Member} from "../models/member";

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  member: Member;

  constructor(private route: ActivatedRoute, private memberService: MemberService, private location: Location) { }

  ngOnInit() {
    this.getMember();
  }

  getMember() {
    var id = +this.route.snapshot.paramMap.get('id');
    this.memberService.getMember(id)
      .subscribe(member => this.member = member);
  }

  goBack() {
    this.location.back();
  }

}
