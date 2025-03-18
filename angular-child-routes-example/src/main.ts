import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'; // ✅ Import provideRouter
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // ✅ Import your routes

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)] // ✅ Provide router here
}).catch(err => console.error(err));
