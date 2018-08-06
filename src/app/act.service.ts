import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActService {

  Data;
  constructor() { }
  check(str){
    console.log("in service", str)
    this.Data = str
   
  }
  getData(){
    return this.Data 
  }
  
}
