import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './pages/components/content/content.component';
import { HomeComponent } from './pages/components/home/home.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: HomeComponent,
    title: 'DEVELI.BLOG',
  },
  {
    path:'content/:id',
    component:ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
