import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  {
    path: 'games',
    component: ListComponent,
  },
  { path: 'games/add', component: FormComponent },
  { path: 'games/edit/:id', component: FormComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
