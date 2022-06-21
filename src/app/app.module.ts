import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordComponent } from './record/record.component';
import { RecordListComponent } from './record-list/record-list.component';
import { FavoriteDirective } from './favorite.directive';

@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    RecordListComponent,
    FavoriteDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
