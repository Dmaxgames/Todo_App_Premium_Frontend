import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class ShellComponent {

  // ✅ Utilisés dans shell.html (en haut à droite dans ton header)
  userName = 'Edmond Mbadu';
  userSubtitle = 'Tableau de bord Todo Premium';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  // ✅ Bouton Déconnexion du menu profil
  logout(): void {
    this.auth.logout();              // pour l’instant : efface juste le localStorage
    this.router.navigateByUrl('/connexion');
  }
}
