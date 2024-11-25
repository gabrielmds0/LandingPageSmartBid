import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { 
    getAnalytics, 
    provideAnalytics, 
    ScreenTrackingService, 
    UserTrackingService 
} from '@angular/fire/analytics';
import { 
    initializeAppCheck, 
    ReCaptchaEnterpriseProvider, 
    provideAppCheck 
} from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { firebaseConfig } from '../firebase.config'; // Certifique-se de que o caminho está correto

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    //provideAppCheck(() => {
      //const provider = new ReCaptchaEnterpriseProvider(/* reCAPTCHA Enterprise site key */);
      //return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
    //}),
    provideDatabase(() => getDatabase()),
    providePerformance(() => getPerformance()),
  ]
};