import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children:[   
  {
    path: 'sports',
    loadChildren: () => import('./sports/sports.module').then( m => m.SportsPageModule)
  },
  {
    path: 'entertaintment',
    loadChildren: () => import('./entertaintment/entertaintment.module').then( m => m.EntertaintmentPageModule)
  },
  {
    path: 'business',
    loadChildren: () => import('./business/business.module').then( m => m.BusinessPageModule)
  },
  {
    path: 'technology',
    loadChildren: () => import('./technology/technology.module').then( m => m.TechnologyPageModule)
  }
  ]
  },
  {
    path:'',
    redirectTo:'/home/tabs/sports',
    pathMatch:'full'
  }

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
