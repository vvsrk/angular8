import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-directives',
  templateUrl: './use-directives.component.html',
  styleUrls: ['./use-directives.component.css']
})
export class UseDirectivesComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  show = false;
  value = 20;
  constructor() { }

  ngOnInit() {
  }

}
