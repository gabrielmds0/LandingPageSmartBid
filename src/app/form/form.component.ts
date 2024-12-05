import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, getFirestore, collection, addDoc } from 'firebase/firestore';
import { firebaseApp } from '../../firebase.config'; // Adjust as needed
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import this module for *ngIf

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [
    ReactiveFormsModule, // For reactive forms
    CommonModule, // Required for *ngIf
  ],
})
export class FormComponent {
  form: FormGroup;
  firestore: Firestore;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fullname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    // Initialize Firestore
    this.firestore = getFirestore(firebaseApp);
  }

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      try {
        const collectionRef = collection(this.firestore, 'submissions');
        await addDoc(collectionRef, this.form.value);
        this.form.reset();
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit the form. Please try again.');
      }
    } else {
      alert('Please fill out the form correctly before submitting.');
    }
  }
}
