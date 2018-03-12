import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Member} from '../models/member';
import {MEMBERS} from '../mock-socios';
import {MemberBundle} from "../member-datatable/member-datatable.component";
import {Fee} from "../models/fee";
import {FEES} from "../mock-fees";

@Injectable()
export class MemberService {

  constructor() { }

  getMembers(): Observable<Member[]> {
    return of(MEMBERS);
  }

  getMembersBundled(): Observable<MemberBundle> {
    let mb: MemberBundle = {
      "items": MEMBERS,
      "total_count": 9
    };
    return of(mb);
  }

  getMember(id: number): Observable<Member> {
    return of(MEMBERS.find(member => member.id === id));
  }

  getFeesByMember(id: number): Observable<Fee[]> {
    return of(FEES.filter(fee => fee.member_id === id));
  }
}
