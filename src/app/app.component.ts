import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-components';
  
  constructor(
    private router: Router
  ) { }

  redirectAuth() {
    this.router.navigateByUrl('/auth');
  }
  redirectNgxsIntro() {
    this.router.navigateByUrl('/ngxs-intro');
  }
}
