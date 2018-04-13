import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Angular2TokenService} from 'angular2-token';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersProvider {

  constructor(private http: Http, private _tokenService: Angular2TokenService) {
  }

  getAll() {
    return this._tokenService
      .get('user')
      .map(users => users.json());
  }

  //   {
  //     id: 1, type: "users", attributes: {
  //       name: "Homer Simpson",
  //       city: "Springfield",
  //       age: 40,
  //       profileImage: "http://cdn2.ubergizmo.com/wp-content/uploads/2016/02/homer-simpson.jpeg",
  //       languages: [
  //         {
  //           name: "English",
  //           learn: "German",
  //           isoCode: "ENG",
  //           proficiency: "native"
  //         }
  //       ]
  //     }
  //   },
  //   {
  //     id: 2, type: "users", attributes: {
  //       name: "Super Mario",
  //       city: "Rome",
  //       age: 30,
  //       profileImage: "https://www.techprincess.it/wp-content/uploads/2018/03/TechPrincess_MAR10Day_festeggiamenti-382x420.jpg",
  //       languages: [
  //         {
  //           name: "Italian",
  //           learn: "Swedish",
  //           isoCode: "ITA",
  //           proficiency: "native"
  //         }
  //       ]
  //     }
  //   },
  //   {
  //     id: 3, type: "users", attributes: {
  //       name: "Obelix",
  //       city: "Paris",
  //       age: 25,
  //       profileImage: "http://www.asterix.com/imgs/perso3-3.png",
  //       languages: [
  //         {
  //           name: "French",
  //           learn: "Spanish",
  //           isoCode: "FR",
  //           proficiency: "native"
  //         }
  //       ]
  //     }
  //   },
}
