import { Injectable } from '@angular/core';

import { Http, Request, Response, Headers, RequestOptions } from "@angular/http"

import { Rat } from "./rat"

import "rxjs"

@Injectable()
export class RatService {
  RATS: Rat[] = []

  constructor(private http: Http) { this.get_rats() }

  get_rats(){
  	this.http.get("/rats")
  		.map( (response: Response) => response.json() )
  		.subscribe(
  			data => {
	  			this.RATS = data
	  		},
	  		(e) => {
	  			console.log(e)
	  		},
	  		() => {console.log("Continue?")}
  		)
  }

  create(rat: Rat){
  	const headers = new Headers({ "Content-Type": "application/json" })
  	const options = new RequestOptions({ headers: headers })

  	this.http.post("/create", rat, options)
  		.subscribe(response => this.get_rats())
  }

  delete(id: string){
  	this.http.delete("/delete/"+id)
  		.subscribe(response => this.get_rats())
  }
}
