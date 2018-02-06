import { Component, OnInit, OnDestroy } from '@angular/core';

import { Word } from "./../word"

import { WordService } from "./../word.service"

@Component({
  selector: 'app-words-create',
  templateUrl: './words-create.component.html',
  styleUrls: ['./words-create.component.css'],
  providers: [WordService]
})
export class WordsCreateComponent implements OnInit {

  hideMe = false;
  new_creator_name_first = ["The Catastrophically Gigantic","The Teensy Weensy","The Caring","I'm Lovin'","The Victorious","Blue","The Apple Of My","The Storytelling","The Everlasting","The Problematic","The Endlessly Programming","The Hapless","An Exhausted","The Steam Powered","The Atomic","Orange","The Last","The Lochness","The First","A Joyful","An Elated","A Potentially Preposterous","A Confused","King","Queen","Prince","Princess","Mud","Ice Cold","Frosty","An Enraged","A Confused","A Placcid","Cheeky","Hot Pink","Magenta","Turqoise","Navy Blue","Crimson","Purple","Green","Aquamarine","Lime Green","Forest Green","Salmon","Fifty Shades of","Grey","Gray","Silver","The Golden","Mustard Yellow","Onyx","Violet","Indigo"];
  new_creator_name_last = ["Elephant","Turtle","Octopus","Coconut","Cathulu","Mocha Frappachino","Lion","Armadillo","Hedgehog","Programmer","Porcupine","Narwhal","Purpoise","Pterodactyl","T-Rex","Bear","Shrimp","Human","Robot","Rabbit","Bunny","Cat","Dog","Tortoise","Snail","Sloth","Bobcat","Leopard","Shoe","Tiger","Whale","Dolphin","Parrot","Eagle","Dove","Pidgeon","Raven","Dragon","Crow","Ostritch","Osprey","Puffin","Penguin","Flamingo","Hawk","Shark","Fish","Salmon","Pidgey","Monkey","Gorilla","Baboon","Bonobo"];
  new_word: Word = new Word("", this.getRandomCreatorName())
  messages = [];
  connection;
  message;
  exist;
  regexp = new RegExp("^[a-zA-Z0-9_,';:\"\.\!\)\(&/?-]+$");
  admin_pass: string = ""

  constructor(public wordService: WordService) { }

  ngOnInit() {
    this.connection = this.wordService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  create() {
    if((this.wordService.WORDS.length < this.wordService.maxLength)
    && this.wordQuery(this.new_word.word)
    && this.new_word.creator.length >= 2) {
      this.wordService.create(this.new_word)
      this.new_word = new Word("", this.new_word.creator)
      this.wordService.overflow = false;
      this.hideMe = true;
    } else {
      this.wordService.overflow = true;
    }
  }

  wordQuery(word){
    // console.log("http://api.datamuse.com/words?ml="+this.new_word.word+"&max=1");
    if(this.regexp.test(word) && word.length < 150){
      return true;
    }
    return false;
  }

  private getRandomCreatorName() {
    let randomIndex = Math.floor((Math.random() * this.new_creator_name_first.length) );
    let randomIndex2 = Math.floor((Math.random() * this.new_creator_name_last.length) );
    return ""+this.new_creator_name_first[randomIndex]+" "+this.new_creator_name_last[randomIndex2];
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  adminSubmit(){
    console.log("submitting...");
    this.wordService.adminSubmit(this.admin_pass);
  }

  clear(){
    this.messages = [];
    this.wordService.clear();
  }

}
