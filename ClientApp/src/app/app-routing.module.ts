import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IbaLoginComponent } from './components/iba-login/iba-login.component';
import { IbaHomeComponent } from './components/iba-home/iba-home.component';
import { IbaContactComponent } from './components/iba-contact/iba-contact.component';
import { IbaMinistriesComponent } from './components/iba-ministries/iba-ministries.component';

const routes: Routes = [
  {path: '', component: IbaHomeComponent},
  {path: 'login', component: IbaLoginComponent},
  {path: 'contact', component: IbaContactComponent},
  {path: 'ministries', component: IbaMinistriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
