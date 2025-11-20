import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  const router = inject(Router);

  if (authService.isAuthenticated()) {
    router.navigate(['/dashboard']);
    return false;
  }
  return true;
};
