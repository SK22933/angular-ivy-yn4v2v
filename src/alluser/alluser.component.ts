import { Component, OnInit } from '@angular/core';
import {user} from './user.model';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent {

users:user[]

  constructor() { 
    this.users=[new user('jack',45,new Date('2008-06-17')),
   new user('Rajesh',56,new Date('2005-03-25')),
   new user('Ritu',28,new Date('2014-10-21')),
   new user('jitu',32,new Date('2012-06-17'))];
  }

 

}