import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
          children: [
            { label: 'Power Bi Report', route: '/dashboard/nfts' },
           { label: 'Player Stat', route: '/dashboard/player' },
           { label: 'Match Stat', route: '/dashboard/match' },
           { label: 'Team Stat', route: '/dashboard/team' },
           { label: 'Medical Stat', route: '/dashboard/medical' },
           { label: 'Injuries Stat', route: '/dashboard/injuries' },

          ],
        },
        
        
      ],
    },
    {
      group: 'partie ai',
      separator: true,
      items: [
        
        
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Ask Ai ✨',
          route: 'dashboard/chatbot',
        },
      ],
    },
    
  ];
}
