import { Component, OnInit } from '@angular/core';

import { Rat } from "./../rat"

import { RatService } from "./../rat.service"

@Component({
  selector: 'app-rats-create',
  templateUrl: './rats-create.component.html',
  styleUrls: ['./rats-create.component.css']
})
export class RatsCreateComponent implements OnInit {

  new_rat_name: string[] = ["Billy","Alfred","Squeaker", "Itchy","Mouser","Albiniqua","Not-A-Mouse","Ratty","Remy","Bob","Joe","Fluffball"]
  new_rat_name_last: string[] = ["Bobberson","Alfredson","Squeakington", "Cheesings","Quarterportion","Albiniquadron","Remmington","Rattson","Mousington","Rattington","Longtail","Shorttail","Longcoat","The Grey","The White","The Chosen One", "The Great", "The I","The III","The V"]

  new_rat: Rat = new Rat(this.getRandomName(), this.getRandomAge())

  constructor(private ratService: RatService) { }

  ngOnInit() {
  }

  create() {
    this.ratService.create(this.new_rat)
    this.new_rat = new Rat(this.getRandomName(), this.getRandomAge())
  }

  private getRandomName() {
    let randomIndex = Math.floor((Math.random() * this.new_rat_name.length) );
    let randomIndex2 = Math.floor((Math.random() * this.new_rat_name_last.length) );
    return ""+this.new_rat_name[randomIndex]+" "+this.new_rat_name_last[randomIndex2];
  }

  private getRandomAge() {
    return (Math.floor((Math.random() * 5))+1);
  }

}
