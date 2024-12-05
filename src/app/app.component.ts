import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { Body2Component } from './body2/body2.component';
import { FormComponent } from './form/form.component';
import { Body3Component } from './body3/body3.component';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    Body2Component,
    FormComponent,
    Body3Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'lp-smartbid';
  constructor(private firestore: Firestore) {}
  public ngOnInit(): void {
    console.log('AppComponent initialized');
  }
}
