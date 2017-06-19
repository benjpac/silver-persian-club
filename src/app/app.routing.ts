import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { AdminComponent } from './admin/admin.component';
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
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'cats/:id',
    component: CatDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

