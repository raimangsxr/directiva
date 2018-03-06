import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import localeEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatSidenavModule,
  MatAutocompleteModule, MatButtonToggleModule, MatCardModule, MatChipsModule, MatDatepickerModule, MatDialogModule,
  MatDividerModule, MatExpansionModule, MatGridListModule, MatInputModule, MatListModule, MatMenuModule,
  MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatSelectModule,
  MatRippleModule, MatRadioModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
  MatTableModule, MatTabsModule, MatTooltipModule, MatStepperModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { SociosComponent } from './socios/socios.component';
import { SociosDetailComponent } from './socios-detail/socios-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SocioService } from './services/socio.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TesoreriaComponent } from './tesoreria/tesoreria.component';
import { AlmacenComponent } from './almacen/almacen.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './services/api.service';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    SociosComponent,
    SociosDetailComponent,
    DashboardComponent,
    PageNotFoundComponent,
    LoginComponent,
    AdminComponent,
    SidenavComponent,
    TesoreriaComponent,
    AlmacenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule,
    MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule,
    MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
    MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
    MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    SocioService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
