import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntertaintmentPage } from './entertaintment.page';

const routes: Routes = [
  {
    path: '',
    component: EntertaintmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntertaintmentPageRoutingModule {}
