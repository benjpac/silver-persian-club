import { AboutComponent } from './about/about.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
     path: '',
     component: CatListComponent
   },
  {
    path: 'about',
    component: AboutComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

