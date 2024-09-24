import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loggedUsr = localStorage.getItem('loginUser');
  if (loggedUsr !== null) {
    return true;
  } else {
    router.navigateByUrl('login');
    return false;
  }
};
