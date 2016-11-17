import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Thing {
  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "twitter": "ionicframework",
    "about": "Burt is a Bear.",
    "location": "Everywhere",
    "email": "burt@example.com",
    "phone": "+1-541-754-3010"
  };


  constructor(public http: Http) {
  }

  query() : Observable<any> {
    return new Observable(observer => {
      observer.next({
        items: [
          {
             "name": "Burt Bear",
             "profilePic": "assets/img/speakers/bear.jpg",
             "twitter": "ionicframework",
             "about": "Burt is a Bear.",
             "location": "Everywhere",
             "email": "burt@example.com",
             "phone": "+1-541-754-3010"
           },
           {
             "name": "Charlie Cheetah",
             "profilePic": "assets/img/speakers/cheetah.jpg",
             "twitter": "ionicframework",
             "about": "Charlie is a Cheetah.",
             "location": "Everywhere",
             "email": "charlie@example.com",
             "phone": "+1-541-754-3010"
           },
           {
             "name": "Donald Duck",
             "profilePic": "assets/img/speakers/duck.jpg",
             "twitter": "ionicframework",
             "about": "Donald is a Duck.",
             "location": "Everywhere",
             "email": "donald@example.com",
             "phone": "+1-541-754-3010"
           },
           {
             "name": "Eva Eagle",
             "profilePic": "assets/img/speakers/eagle.jpg",
             "twitter": "ionicframework",
             "about": "Eva is an Eagle.",
             "location": "Everywhere",
             "email": "eva@example.com",
             "phone": "+1-541-754-3010"
           },
           {
             "name": "Ellie Elephant",
             "profilePic": "assets/img/speakers/elephant.jpg",
             "twitter": "ionicframework",
             "about": "Ellie is an Elephant.",
             "location": "Everywhere",
             "email": "ellie@example.com",
             "phone": "+1-541-754-3010"
           },
           {
             "name": "Gino Giraffe",
             "profilePic": "assets/img/speakers/giraffe.jpg",
             "twitter": "ionicframework",
             "about": "Gino is a Giraffe.",
             "location": "Everywhere",
             "email": "gino@example.com",
             "phone": "+1-541-754-3010"
           },
           {
             "name": "Isabella Iguana",
             "profilePic": "assets/img/speakers/iguana.jpg",
             "twitter": "ionicframework",
             "about": "Isabella is an Iguana.",
             "location": "Everywhere",
             "email": "isabella@example.com",
             "phone": "+1-541-754-3010"
           },
           {
             "name": "Karl Kitten",
             "profilePic": "assets/img/speakers/kitten.jpg",
             "twitter": "ionicframework",
             "about": "Karl is a Kitten.",
             "location": "Everywhere",
             "email": "karl@example.com",
             "phone": "+1-541-754-3010"
           },
           {
             "name": "Lionel Lion",
             "profilePic": "assets/img/speakers/lion.jpg",
             "twitter": "ionicframework",
             "about": "Lionel is a Lion.",
             "location": "Everywhere",
             "email": "lionel@example.com",
             "phone": "+1-541-754-3010"
           },
           {
             "name": "Molly Mouse",
             "profilePic": "assets/img/speakers/mouse.jpg",
             "twitter": "ionicframework",
             "about": "Molly is a Mouse.",
             "location": "Everywhere",
             "email": "molly@example.com",
             "phone": "+1-541-754-3010"
           },
           {
             "name": "Paul Puppy",
             "profilePic": "assets/img/speakers/puppy.jpg",
             "twitter": "ionicframework",
             "about": "Paul is a Puppy.",
             "location": "Everywhere",
             "email": "paul@example.com",
             "phone": "+1-541-754-3010"
           },
           {
             "name": "Rachel Rabbit",
             "profilePic": "assets/img/speakers/rabbit.jpg",
             "twitter": "ionicframework",
             "about": "Rachel is a Rabbit.",
             "location": "Everywhere",
             "email": "rachel@example.com",
             "phone": "+1-541-754-3010"
           },
           {
             "name": "Ted Turtle",
             "profilePic": "assets/img/speakers/turtle.jpg",
             "twitter": "ionicframework",
             "about": "Ted is a Turtle.",
             "location": "Everywhere",
             "email": "ted@example.com",
             "phone": "+1-541-754-3010"
           }
        ]
      })
    })
  }

}