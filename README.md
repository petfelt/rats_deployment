# Story Creator

A story creator updated in real time as people submit words one by one. Created in the MEAN stack with sockets. Includes simple admin control to clear the story.

![Image Preview Of Story Creator](https://github.com/petfelt/rats_deployment/blob/master/media/preview1.png)

## Code Snippet

Creating a new word post! Sending a post request to our server while also emitting through sockets:
```javascript
create(word: Word){
  const headers = new Headers({ "Content-Type": "application/json" })
  const options = new RequestOptions({ headers: headers })

  this.http.post("/create", word, options)
    .subscribe(response => this.get_words())
  this.sendMessage(word.word, word.creator, new Date());
}

sendMessage(message, message2, message3){
  this.socket.emit('add-message', message, message2, message3);
}
```

## Built With

* [MEAN](http://mean.io/) - Stack used. Comprised of [MongoDB](https://www.mongodb.com/), [Express](https://expressjs.com/), [Angular 4](https://angular.io/), & [NodeJS](https://nodejs.org/en/).
* [Angular-CLI](https://cli.angular.io/) - Template construction.
* [Socket.io](https://socket.io/) - Sockets for real time story updates.

## Author

* **Peter Amin Felton** - *Project Development* - [petfelt](https://github.com/petfelt).

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgments

* A Couple Of Friends - For getting a kick out of this project.
* My Father - For consistent encouragement.
