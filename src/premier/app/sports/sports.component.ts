import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


sports = [
  {
    sportName: 'Canoeing',
    imgUrl: 'assets/canoeing.jpg' 
  },
  {
    sportName: 'Rowing',
    imgUrl: 'assets/rowing.jpg' 
  },
  {
    sportName: 'Rowing',
    imgUrl: 'assets/rowing.jpg' 
  },
  {
    sportName: 'Rowing',
    imgUrl: 'assets/rowing.jpg' 
  },
  {
    sportName: 'Rowing',
    imgUrl: 'assets/rowing.jpg' 
  },
  {
    sportName: 'Rowing',
    imgUrl: 'assets/rowing.jpg' 
  },
  {
    sportName: 'Rowing',
    imgUrl: 'assets/rowing.jpg' 
  },
  {
    sportName: 'Rowing',
    imgUrl: 'assets/rowing.jpg' 
  },
  {
    sportName: 'Rowing',
    imgUrl: 'assets/rowing.jpg' 
  },

]

}
