import { Component } from '@angular/core';
import { Auth } from '../../../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: false,
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {
  constructor(private auth: Auth, private router: Router) {}
  logout(){
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
