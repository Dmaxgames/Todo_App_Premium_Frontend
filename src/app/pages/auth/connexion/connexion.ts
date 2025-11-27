// C:/wamp64/www/todo-front/src/app/pages/auth/connexion/connexion.ts

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './connexion.html',
  styleUrl: './connexion.css',
})
export class ConnexionComponent {
  // ✅ Injections avec l’API inject()
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private auth = inject(AuthService);

  // ✅ Maintenant on peut utiliser this.fb sans erreur TS2729
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [false],
  });

  isSubmitting = false;

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const { email, password } = this.form.value;

    // Pour l’instant : login simulé
    const ok = this.auth.login(email ?? '', password ?? '');

    setTimeout(() => {
      this.isSubmitting = false;

      if (ok) {
        // Après login → vers le layout protégé
        this.router.navigateByUrl('/app');
      } else {
        alert('Identifiants invalides');
      }
    }, 600);
  }

  // Getters pratiques pour le template
  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
