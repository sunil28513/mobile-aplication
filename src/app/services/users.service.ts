import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getDetails(){
    return[
      {name:"Hemant", mobile:9721000000, class:"M.tech"},
      {name:"Rajat", mobile:9721000000, class:"M.tech"},
      {name:"sunil", mobile:9721000000, class:"M.tech"},
      {name:"vinay", mobile:9721000000, class:"B.tech"},
    ]
  }
}
