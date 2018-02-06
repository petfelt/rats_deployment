import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import { WordsListComponent } from './words/words-list/words-list.component';
import { WordsCreateComponent } from './words/words-create/words-create.component';

import { TooltipModule } from 'angular2-tooltips';
import { WordService } from './words/word.service';
import { NameFilterPipe } from './name-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    WordsListComponent,
    WordsCreateComponent,
    NameFilterPipe
  ],
  imports: [
    // TooltipModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
