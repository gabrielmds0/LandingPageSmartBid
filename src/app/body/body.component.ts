import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements AfterViewInit {
  @ViewChild('formComponent') formComponent: ElementRef; 

  constructor(private viewportScroller: ViewportScroller) {}

  ngAfterViewInit() { 
    this.viewportScroller.scrollToAnchor('formComponent'); 
  }

  scrollToFormComponent() {
    if (this.formComponent) {
      this.viewportScroller.scrollToAnchor('formComponent'); 
    }
  }
}
