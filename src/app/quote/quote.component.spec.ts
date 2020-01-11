import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  quotes:Quote [] = [
    {id:1, name:'Live as if you were to die tomorrow. Learn as if you were to live forever'},
    {id:2,name:'That which does not kill us makes us stronger'},
    {id:3,name:'Be yourself; everyone else is already taken'},
    {id:4,name:'Do what you can, with what you have, where you are.”'},
    {id:5,name:'If opportunity doesn’t knock, build a doo'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
