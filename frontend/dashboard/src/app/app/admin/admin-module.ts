import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { AdminLayout } from './layout/admin-layout/admin-layout';
import { Navbar } from './layout/navbar/navbar';
import { Sidebar } from './layout/sidebar/sidebar';
import { Footer } from './layout/footer/footer';
import { Dashboard } from './dashboard/dashboard';
import { Products } from './products/products';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminLayout,
    Navbar,
    Sidebar,
    Footer,
    Dashboard,
    Products
  ],
  imports: [
    CommonModule,
      FormsModule,
       ReactiveFormsModule,
    RouterModule,
    AdminRoutingModule
   
  ]
})
export class AdminModule { }
