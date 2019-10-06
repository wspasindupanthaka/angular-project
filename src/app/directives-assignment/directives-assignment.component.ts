import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-assignment',
  templateUrl: './directives-assignment.component.html',
  styleUrls: ['./directives-assignment.component.css']
})
export class DirectivesAssignmentComponent implements OnInit {

  buttonText: string = 'Display Text'
  displayParagraph: boolean = false;
  buttonClickEvents=[];
  clicks=0;

  constructor() { }

  ngOnInit() {
  }

  displayHideParagraph() {
    console.log('displayHideParagraph')
    this.clicks+=1;
    this.displayParagraph = this.displayParagraph===true ? false:true;
    this.buttonClickEvents.push(this.clicks+"");
    console.log(this.buttonClickEvents);
  }

  getColor(clickEvent:number) {
    console.log(clickEvent);
    return clickEvent > 5 ? 'red':'white'
  }

}
