import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showText = false;

  introText = `
  <p> Premier Sports Training Camps are the perfect Partner for National Federations or Associations and professional and semi-professional clubs.</p>
  <p>
  Our unbiased, local on the ground and expert knowledge, together with our winning Customer Service ensure successful training camps every time.</p>
  <p>
  We are used to working within tight budgets and will always endeavor to offer very competitive quotes giving good value for money for camps at both well known and many not so well known locations and Sports Centres across the world.
  </p>
  <p>
  Whether it’s warm weather winter or Spring training or pre-season, pre-tournament or championship training camps we can help. We know from personal experience exactly what a good training camp works like and from the initial transfer from the airport we will do our utmost to help Coaches provide the environment, discipline and routine that Athletes need and expect and Coaches require.
  </p>
  <p>
  Contact us now and we’ll get to work !
  </p>
  `

  constructor() { }

  ngOnInit() {
  }

}
