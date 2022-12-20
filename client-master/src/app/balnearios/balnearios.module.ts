import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BalneariosPageRoutingModule } from './balnearios-routing.module';

import { BalneariosPage } from './balnearios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BalneariosPageRoutingModule
  ],
  declarations: [BalneariosPage]
})
export class BalneariosPageModule {}
