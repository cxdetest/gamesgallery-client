import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

import { GamesService } from './services/games.service';
import { NotfoundComponent } from './components/notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormComponent,
    ListComponent,
    NotfoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [GamesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
