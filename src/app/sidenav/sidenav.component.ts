import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  mobileQuery: MediaQueryList;

  navigator = [
    {name: 'Dashboard', url: '/dashboard', icon: 'home'},
    {name: 'Socios', url: '/socios', icon: 'people'},
    {name: 'Tesoreria', url: '/tesoreria', icon: 'euro_symbol'},
    {name: 'Admin', url: '/admin', icon: 'settings'}
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
