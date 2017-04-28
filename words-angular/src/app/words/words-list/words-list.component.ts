import { Component, OnInit, OnDestroy, NgModule } from '@angular/core';

import { Word } from "./../word"

import { WordService } from "./../word.service"


@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.css'],
  providers: [WordService],
})

export class WordsListComponent implements OnInit {
  search_string: string = ""
  messages = [];
  connection;
  message;

  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.connection = this.wordService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  delete(id){
  	this.wordService.delete(id)
  }

  playVoice(word) {
    // Broken currently.
    // new test.talk(word);  //TextToSpeech() is a function inside the text to speech plugin.
  }


  // Let's unsubscribe our Observable
  ngOnDestroy() {
    this.connection.unsubscribe();
  }

}
