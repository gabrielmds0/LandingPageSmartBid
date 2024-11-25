import { bootstrapApplication } from '@angular/platform-browser';
import { FormComponent } from './app/form/form.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(FormComponent, {
  providers: [
    provideHttpClient() // Provide HTTP client for any additional services
  ]
}).catch(err => console.error(err));