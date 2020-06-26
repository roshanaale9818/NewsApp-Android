import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntertaintmentPageRoutingModule } from './entertaintment-routing.module';

import { EntertaintmentPage } from './entertaintment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntertaintmentPageRoutingModule
  ],
  declarations: [EntertaintmentPage]
})
export class EntertaintmentPageModule {}
