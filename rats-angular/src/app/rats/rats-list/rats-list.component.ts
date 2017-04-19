import { Component, OnInit } from '@angular/core';

import { Rat } from "./../rat"

import { RatService } from "./../rat.service"

@Component({
  selector: 'app-rats-list',
  templateUrl: './rats-list.component.html',
  styleUrls: ['./rats-list.component.css']
})
export class RatsListComponent implements OnInit {

  constructor(private ratService: RatService) { }

  ngOnInit() {
  }

  delete(id){
  	this.ratService.delete(id)
  }

}
