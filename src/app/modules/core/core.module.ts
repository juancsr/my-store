import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './services/products/products.service';
import { RandomUsersService  } from './services/random-users/random-users.service';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductsService,
    RandomUsersService,
    SharedModule
  ]
})
export class CoreModule { }
