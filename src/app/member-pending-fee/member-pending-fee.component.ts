import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatSnackBar} from "@angular/material";
import {Fee} from "../models/fee";
import {MemberService} from "../services/member.service";

@Component({
  selector: 'app-member-pending-fee',
  templateUrl: './member-pending-fee.component.html',
  styleUrls: ['./member-pending-fee.component.css']
})
export class MemberPendingFeeComponent implements OnInit {

  id: number;
  fees: Fee[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private memberService: MemberService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.id = this.data.memberId;
    this.memberService.getFeesByMember(this.id)
      .subscribe(fees => this.fees = fees);
  }

  payFee(id: number): void {
    this.fees.find(fee => fee.id === id).paid = true;
    this.snackBar.open('Cambio guardado..', 'Cerrar', { duration: 3000 });
  }

  cancelPayFee(id: number): void {
    this.fees.find(fee => fee.id === id).paid = false;
    this.snackBar.open('Cambio guardado..', 'Cerrar', { duration: 3000 });
  }
}
