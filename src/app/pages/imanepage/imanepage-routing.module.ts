import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImanepagePage } from './imanepage.page';

const routes: Routes = [
  {
    path: '',
    component: ImanepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImanepagePageRoutingModule {}
