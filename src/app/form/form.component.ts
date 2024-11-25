import { Component , ViewChild, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild ("saveForm") waitlistForm : any;
  firestore: Firestore = inject(Firestore);

  saveData(): void {
    const acollection = collection(this.firestore, 'waitlist');
    addDoc(acollection, {
      'fullname': this.waitlistForm.value.fullname,
      'phone': this.waitlistForm.value.phone,
      'email': this.waitlistForm.value.email,
    })
  }
  resetForm():void {
    this.waitlistForm.reset({
      'fullname':'',
      'phone':'',
      'email':'',
      
    })
  }
  submitForm():void {
    alert(this.waitlistForm.value.fullname);
    this.saveData();
    this.resetForm();
  }
}