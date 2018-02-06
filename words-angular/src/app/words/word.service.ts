import { Injectable } from '@angular/core';

import { Http, Request, Response, Headers, RequestOptions } from "@angular/http"

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import * as io from 'socket.io-client';

import { Word } from "./word"

import "rxjs"

@Injectable()
export class WordService {
  WORDS: Word[] = []
  overflow = false;
  maxLength = 10000;
  admin = false;
  // Our localhost address that we set in our server code
  private url = 'http://localhost:8000';
  private socket;

  constructor(private http: Http) { this.get_words() }

  get_words(){
  	this.http.get("/words")
  		.map( (response: Response) => response.json() )
  		.subscribe(
  			data => {
	  			this.WORDS = data
	  		},
	  		(e) => {
	  			console.log(e)
	  		},
	  		() => {console.log("Word submitted.")}
  		)
  }

  create(word: Word){
  	const headers = new Headers({ "Content-Type": "application/json" })
  	const options = new RequestOptions({ headers: headers })

  	this.http.post("/create", word, options)
  		.subscribe(response => this.get_words())
    this.sendMessage(word.word, word.creator, new Date());
  }

  delete(id: string){
  	this.http.delete("/delete/"+id)
  		.subscribe(response => this.get_words())
  }

  clear(){
    this.http.delete("/clear")
      .subscribe(response => this.get_words())
    this.socket.emit('add-message', "<<< REFRESH YOUR PAGE! The story has been cleared by an admin. >>>", "Refresh Your Page!", new Date());
  }

  sendMessage(message, message2, message3){
    // Make sure the "add-message" is written here because this is referenced in on() in our server
    this.socket.emit('add-message', message, message2, message3);
  }

   getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

    adminSubmit(password){
      if(password == "1234qwerasdfbillygoatee19951234qwerasdfbillygoatee19951234qwerasdfbillygoatee19951234qwerasdfbillygoatee19951234qwerasdfbillygoatee1995"){
        console.log("Success!");
        this.admin = true;
      } else {
        console.log("Invalid passcode.");
        this.admin = false;
      }
    }
}
