import { Component, OnInit } from '@angular/core';
import { faBook, faCar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  faCar = faCar;

  constructor() { }

  ngOnInit() {
  }

}