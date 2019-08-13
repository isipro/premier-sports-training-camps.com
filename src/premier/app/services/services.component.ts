import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {


  consultancy = [
    'Coaching Coaches to improve individual and team performance',
    'Elite athlete coaching and tournament preparation',
    'Specialist one on one coaching',
    'Training camp planning and assessment',
    'Remedial training and technique improvement',
    'Training program design, planning and delivery', 
    'Nutrition, conditioning and strength',
    'Sports Psychology',
    'Transportation planning and logistics',
    'International Tournament and Event Planning, Implementation and Staging',
    'Advising and liaising with National Federations on Athlete development',
    'Strategic development plans for Junior athletes'
  ]

  constructor() { }

  ngOnInit() {
  }

}
