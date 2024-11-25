import { Component, ViewChild, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  firestore: Firestore = inject(Firestore);
  // Objeto para armazenar os dados do formulário
  formData = {
    fullname: '',
    phone: '',
    email: ''
  };

  @ViewChild('saveForm') waitlistForm!: NgForm; // Tipo correto para referenciar o formulário

  async saveData(): Promise<void> {
    try {
      console.log('Saving data:', this.formData); // Log para verificar os dados
      const acollection = collection(this.firestore, 'waitlist');
      const docRef = await addDoc(acollection, this.formData);
      console.log('Data saved successfully with ID:', docRef.id);
      alert('Data saved successfully!');
    }
    catch (error) {
      console.error('Error saving data to Firestore:', error);
      alert('Failed to save data. Please try again.');
    }
  }

  resetForm(): void {
    if (this.waitlistForm) {
      console.log('Resetting form...');
      this.waitlistForm.resetForm({
        fullname: '',
        phone: '',
        email: ''
      });
      console.log('Form reset complete');
    } else {
      console.error('Form reference (waitlistForm) not found');
    }
  }

  submitForm(event: Event): void {
    event.preventDefault(); // Previne o comportamento padrão
    console.log('submitForm called');
    console.log('Form data:', this.formData);
    this.saveData();
    this.resetForm();
  }
}