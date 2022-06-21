import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordComponent } from './record/record.component';
import { RecordListComponent } from './record-list/record-list.component';
import { FavoriteDirective } from './favorite.directive';
import { GenresListPipe } from './genre-list.pipe';
import { RecordFormComponent } from './record-form/record-form.component';

@NgModule({
  declarations: [
    AppComponent,
    //this is where i add all the components, directives and pipes to be used in the module
    RecordComponent,
    RecordListComponent,
    FavoriteDirective,
    GenresListPipe,
    RecordFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
