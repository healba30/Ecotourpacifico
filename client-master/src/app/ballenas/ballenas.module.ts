import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BallenasPageRoutingModule } from './ballenas-routing.module';

import { BallenasPage } from './ballenas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BallenasPageRoutingModule
  ],
  declarations: [BallenasPage]
})
export class BallenasPageModule {}
