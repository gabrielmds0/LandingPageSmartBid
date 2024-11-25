import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData = {
    fullname: '',
    phone: '',
    email: ''
  };

  constructor(private firestore: Firestore) {}

  async onSubmit() {
    try {
      const collectionRef = collection(this.firestore, 'waitlist');
      const docRef = await addDoc(collectionRef, this.formData);
      console.log('Document added with ID:', docRef.id);
      alert('Thank you for joining the waitlist!');
      this.formData = { fullname: '', phone: '', email: '' }; // Reset the form
    }
    catch (error) {
      console.error('Error adding document:', error);
      alert('Error submitting the form. Please try again.');
    }
  }
}