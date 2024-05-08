import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const expectedRoles = next.data['expectedRoles'];
    const userRole = localStorage.getItem('userRole'); // Call your service to get user's role
    
    if (expectedRoles.includes(userRole)) {
      return true; // User has the required role, allow navigation
    } else {
      // User does not have the required role, redirect to unauthorized page or handle accordingly
      this.router.navigate(['/notfound']);
      return false;
    }
  }
}
