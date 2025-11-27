import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  // Infos utilisateur affichées dans la carte centrale
  user = {
    name: 'Edmond Mbadu',
    role: 'Gestionnaire de tâches • ADN-KC',
    avatarInitials: 'EM',
  };

  // Stats principales
  stats = {
    totalTasks: 42,
    doneTasks: 28,
    todayTasks: 7,
    focusScore: 76,
  };

  // “Polygones” latéraux : sections de ton écosystème
  panels = [
    {
      id: 'tasks',
      label: 'Mes tâches',
      value: '23',
      subtitle: 'En cours',
      accent: 'from-emerald-400 to-cyan-400',
    },
    {
      id: 'team',
      label: 'Équipe',
      value: '5',
      subtitle: 'Collaborateurs',
      accent: 'from-purple-400 to-pink-500',
    },
    {
      id: 'projects',
      label: 'Projets actifs',
      value: '3',
      subtitle: 'Roadmap',
      accent: 'from-sky-400 to-indigo-500',
    },
  ];

  // Sugg. de “flux” (comme la colonne de droite dans GX)
  streams = [
    {
      title: 'Sprint actuel',
      tag: 'Semaine 48',
      description: 'Priorités critiques à terminer avant vendredi.',
    },
    {
      title: 'Focus profond',
      tag: 'Aujourd’hui',
      description: 'Bloc de 2h réservé à la rédaction / conception.',
    },
    {
      title: 'Revues d’équipe',
      tag: 'Vendredi',
      description: 'Stand-up d’équipe et revue des indicateurs.',
    },
  ];
}
