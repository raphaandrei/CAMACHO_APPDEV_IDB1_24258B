import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAdmin = false; // Change this to 'true' to allow access (mock authentication)
    
    if (!isAdmin) {
      this.router.navigate(['/']); // Redirect to home if not admin
      return false;
    }

    return true;
  }
}
