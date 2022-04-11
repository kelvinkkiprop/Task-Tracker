import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  //Inputs:coming from component using our selecter
  @Input() text?: string
  @Input() color?: string
  @Output() btnClick = new EventEmitter()//Call event

  constructor() { }

  //FUNCTIONS
  ngOnInit(): void {
  }

  handlePassedOnClickEvent(){//From using class
    // console.log("clicked")
    //Trigger click
    this.btnClick.emit();
  }

}
