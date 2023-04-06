import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'feeds',
    component: AppComponent,
  },
  {
    path: '',
    redirectTo: 'feeds',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'feeds',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
