import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard';

const routes: Routes = [
{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./app/auth/auth-module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
     canLoad: [AuthGuard],
  canActivate: [AuthGuard],
    loadChildren: () => import('./app/admin/admin-module').then(m => m.AdminModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
