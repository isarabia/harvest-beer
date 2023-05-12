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
    path: 'month/enero',
    loadChildren: () => import('./pages/month/enero/enero.module').then( m => m.EneroPageModule)
  },
  {
    path: 'month/febrero',
    loadChildren: () => import('./pages/month/febrero/febrero.module').then( m => m.FebreroPageModule)
  },
  {
    path: 'month/marzo',
    loadChildren: () => import('./pages/month/marzo/marzo.module').then( m => m.MarzoPageModule)
  },
  {
    path: 'month/abril',
    loadChildren: () => import('./pages/month/abril/abril.module').then( m => m.AbrilPageModule)
  },
  {
    path: 'month/mayo',
    loadChildren: () => import('./pages/month/mayo/mayo.module').then( m => m.MayoPageModule)
  },
  {
    path: 'month/junio',
    loadChildren: () => import('./pages/month/junio/junio.module').then( m => m.JunioPageModule)
  },
  {
    path: 'month/julio',
    loadChildren: () => import('./pages/month/julio/julio.module').then( m => m.JulioPageModule)
  },
  {
    path: 'month/agosto',
    loadChildren: () => import('./pages/month/agosto/agosto.module').then( m => m.AgostoPageModule)
  },
  {
    path: 'month/septiembre',
    loadChildren: () => import('./pages/month/septiembre/septiembre.module').then( m => m.SeptiembrePageModule)
  },
  {
    path: 'month/octubre',
    loadChildren: () => import('./pages/month/octubre/octubre.module').then( m => m.OctubrePageModule)
  },
  {
    path: 'month/noviembre',
    loadChildren: () => import('./pages/month/noviembre/noviembre.module').then( m => m.NoviembrePageModule)
  },
  {
    path: 'month/diciembre',
    loadChildren: () => import('./pages/month/diciembre/diciembre.module').then( m => m.DiciembrePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
