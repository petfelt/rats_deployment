import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Word } from "./words/word"

// This is actually a filter for name, age, and created at.

@Pipe({
  name: 'name_filter'
})
export class NameFilterPipe implements PipeTransform {

  transform(value: Word[], filter_name: string): any {
    if(!filter_name){ return value }

    // For date transformation here.
    var datePipe = new DatePipe("en-US");
    // Mega filter for all keys of word...kinda slow, isn't nice to age.
    function contains_string(word: Word, str: string): boolean {
      str = str.toLowerCase()

      for(var key in word){
        if(key != "_id" && key != "__v"){
          // This date conversion makes it super slow...only way I know how to search thru date correctly.
          if(key == "createdAt" || key == "updatedAt"){
            let tempDate = datePipe.transform(word[key], "MMMM d, yyyy h:mm:ss a")
            if(tempDate.toString().toLowerCase().indexOf(str) > -1){
              // console.log(key, tempDate.toString())
              return true
            }
          } else {
            if(word[key].toString().toLowerCase().indexOf(str) > -1){
              // console.log(key, word[key].toString())
              return true
            }
          }
        }
      }
      return false
    }
    return value.filter(word => contains_string(word, filter_name))


    // Includes name, age, and date.
    // return value.filter((word => word.name.toLowerCase().indexOf(filter_name.toLowerCase()) > -1
    // || word.age.toString() == filter_name
    // || word.createdAt.toString().toLowerCase().indexOf(filter_name.toLowerCase()) > -1))

  }

}
