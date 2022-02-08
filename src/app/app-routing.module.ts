import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'application',
    loadChildren: () => import('./application/application.module').then( m => m.ApplicationPageModule)
  },
  //{
   // path: 'oms-new',
  //  loadChildren: () => import('./oms-new/oms-new.module').then( m => m.Oms-newPageModule)
  //},
  {
    path: 'horainves',
    loadChildren: () => import('./horainves/horainves.module').then( m => m.HorainvesPageModule)
  },
  {
    path: 'pergnort/:id',
    loadChildren: () => import('./pergnort/pergnort.module').then( m => m.PergnortPageModule)
  },
  {
    path: 'noticia/:id',
    loadChildren: () => import('./noticia/noticia.module').then( m => m.NoticiaPageModule)
  },
  {
    path: 'oms-new',
    loadChildren: () => import('./oms-new/oms-new.module').then( m => m.OmsNewPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
