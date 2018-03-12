import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';
import {Member} from "../models/member";
import {MemberService} from "../services/member.service";
import {MemberPendingFeeComponent} from "../member-pending-fee/member-pending-fee.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-member-datatable',
  templateUrl: './member-datatable.component.html',
  styleUrls: ['./member-datatable.component.css']
})
export class MemberDatatableComponent implements OnInit {

  @Input() year: number;

  displayedColumns = ['number', 'firstName', 'lastName', 'created', 'pendingFee'];
  dao: MemberDao | null;
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient, private memberService: MemberService, private dialog: MatDialog, private router: Router) {}

  ngOnInit() {
    this.dao = new MemberDao(this.memberService);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.dao!.getMembers(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.dataSource.data = data);
  }

  openPendingFee(id: number): void {
    //noinspection TypeScriptUnresolvedFunction
    let dialogRef = this.dialog.open(MemberPendingFeeComponent, {
      data: { memberId: id}
    });
  }

  detailMember(id: number): void {
    this.router.navigate(['/members/'+id]);
  }

}

export interface MemberBundle {
  items: Member[];
  total_count: number;
}

export class MemberDao {
  constructor(private memberService: MemberService) {}

  getMembers(sort: string, order: string, page: number): Observable<MemberBundle> {
    return this.memberService.getMembersBundled();
    /*
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
      `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;

    return this.http.get<MemberBundle>(requestUrl);
    */
  }
}
