// C:/wamp64/www/todo-front/src/app/core/auth/auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'todo_premium_token';

  // Simule un "login" réussi : on stocke juste un token factice
  login(email: string, password: string): boolean {
    // Plus tard : appel API Symfony-TODO-PREMIUM ici
    // Pour l’instant, on accepte tout et on met un token bidon
    const fakeToken = 'demo-token-todo-premium';
    localStorage.setItem(this.TOKEN_KEY, fakeToken);
    return true;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
