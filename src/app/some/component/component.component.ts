import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  constructor() {
    console.log('>> 123');
  }

  ngOnInit() {
  }

}
