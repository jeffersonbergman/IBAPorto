import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IbaHomeComponent } from './components/iba-home/iba-home.component';
import { IbaAboutComponent } from './components/iba-about/iba-about.component';
import { IbaContactComponent } from './components/iba-contact/iba-contact.component';
import { IbaFooterComponent } from './components/iba-footer/iba-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { IbaToolbarComponent } from './components/iba-toolbar/iba-toolbar.component';
import { IbaLoginComponent } from './components/iba-login/iba-login.component';
import { IbaMinistriesComponent } from './components/iba-ministries/iba-ministries.component';
import { IbaDialogComponent } from './components/iba-dialog/iba-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    IbaHomeComponent,
    IbaAboutComponent,
    IbaContactComponent,
    IbaFooterComponent,
    IbaToolbarComponent,
    IbaLoginComponent,
    IbaMinistriesComponent,
    IbaDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
