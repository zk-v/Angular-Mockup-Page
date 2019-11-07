import { Component, OnInit } from '@angular/core';
import { faCubes, faDatabase, faFlask } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  faDatabase = faDatabase;
  faCubes = faCubes;
  faFlask = faFlask;

  constructor() { }

  ngOnInit() {
  }

}