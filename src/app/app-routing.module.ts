import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MembersComponent} from "./members/members.component";
import {MemberDetailComponent} from "./member-detail/member-detail.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LoginComponent} from "./login/login.component";
import {AdminComponent} from "./admin/admin.component";
import {AuthGuard} from "./services/auth-guard.service";
import {AuthService} from "./services/auth.service";
import {TreasuryComponent} from "./treasury/treasury.component";
import {WarehouseComponent} from "./warehouse/warehouse.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'members', component: MembersComponent},
  { path: 'members/:id', component: MemberDetailComponent },
  { path: 'treasury', component: TreasuryComponent},
  { path: 'warehouse', component: WarehouseComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AppRoutingModule {}


