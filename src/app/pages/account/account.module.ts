import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountAddEditComponent } from './account-add-edit/account-add-edit.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AccountListComponent,
    AccountAddEditComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    NgxPermissionsModule.forChild(),
    FormsModule,
    ReactiveFormsModule,
    AgGridAngular
  ]
})
export class AccountModule { }