import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  public logout(event) {
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/admin', 'login']).then();
  }
}
