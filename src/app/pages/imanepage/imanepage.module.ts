import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImanepagePageRoutingModule } from './imanepage-routing.module';

import { ImanepagePage } from './imanepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImanepagePageRoutingModule
  ],
  declarations: [ImanepagePage]
})
export class ImanepagePageModule {}
