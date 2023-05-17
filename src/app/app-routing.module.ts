import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/collection',
    pathMatch: 'full'
  },
  {
    path: 'collection',
    loadChildren: () => import('./pages/collection/collection.module').then(m => m.CollectionPageModule)
  },
  {
    path: 'registry',
    loadChildren: () => import('./pages/registry/registry.module').then(m => m.RegistryPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserPageModule)
  },
  {
    path: 'month/january',
    loadChildren: () => import('./pages/months/january/january.module').then( m => m.JanuaryPageModule)
  },
  {
    path: 'month/february',
    loadChildren: () => import('./pages/months/february/february.module').then( m => m.FebruaryPageModule)
  },
  {
    path: 'month/march',
    loadChildren: () => import('./pages/months/march/march.module').then( m => m.MarchPageModule)
  },
  {
    path: 'month/april',
    loadChildren: () => import('./pages/months/april/april.module').then( m => m.AprilPageModule)
  },
  {
    path: 'month/may',
    loadChildren: () => import('./pages/months/may/may.module').then( m => m.MayPageModule)
  },
  {
    path: 'month/june',
    loadChildren: () => import('./pages/months/june/june.module').then( m => m.JunePageModule)
  },
  {
    path: 'month/july',
    loadChildren: () => import('./pages/months/july/july.module').then( m => m.JulyPageModule)
  },
  {
    path: 'month/august',
    loadChildren: () => import('./pages/months/august/august.module').then( m => m.AugustPageModule)
  },
  {
    path: 'month/september',
    loadChildren: () => import('./pages/months/september/september.module').then( m => m.SeptemberPageModule)
  },
  {
    path: 'month/october',
    loadChildren: () => import('./pages/months/october/october.module').then( m => m.OctoberPageModule)
  },
  {
    path: 'month/november',
    loadChildren: () => import('./pages/months/november/november.module').then( m => m.NovemberPageModule)
  },
  {
    path: 'month/december',
    loadChildren: () => import('./pages/months/december/december.module').then( m => m.DecemberPageModule)
  },
  {
    path: 'add-beer',
    loadChildren: () => import('./pages/add-beer/add-beer.module').then( m => m.AddBeerPageModule)
  },
  {
    path: 'beer',
    loadChildren: () => import('./pages/beer/beer.module').then( m => m.BeerPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
