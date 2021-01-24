import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-inner-component',
  templateUrl: './result-inner-component.page.html',
  styleUrls: ['./result-inner-component.page.scss'],
})
export class ResultInnerComponentPage implements OnInit {

  constructor() { }
@Input() parkCode:number
  ngOnInit() {
  }

}
