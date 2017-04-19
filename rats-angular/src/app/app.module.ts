import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RatsComponent } from './rats/rats.component';
import { RatsListComponent } from './rats/rats-list/rats-list.component';
import { RatsCreateComponent } from './rats/rats-create/rats-create.component';
import { RatsDetailComponent } from './rats/rats-detail/rats-detail.component';


import { RatService } from './rats/rat.service';

@NgModule({
  declarations: [
    AppComponent,
    RatsComponent,
    RatsListComponent,
    RatsCreateComponent,
    RatsDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
