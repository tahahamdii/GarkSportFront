import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NftComponent } from './pages/nft/nft.component';
import { PodcastComponent } from './pages/podcast/podcast.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PlayerComponent } from './components/player/player.component';
import { MatchComponent } from './components/match/match.component';
import { TeamComponent } from './components/team/team.component';
import { MedicalComponent } from './components/medical/medical.component';
import { InjuriesComponent } from './components/injuries/injuries.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';
import { RoleGuard } from '../auth/pages/role-guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'nfts', pathMatch: 'full' },
      {path: 'nfts', component: NftComponent },
      {path: 'podcast', component: PodcastComponent,
      canActivate:[RoleGuard],
      data: {expectedRoles: ''}
       },
      {path: 'profile', component:ProfileComponent},


      {path: 'player',
      component:PlayerComponent,
      canActivate:[RoleGuard],
      data: { expectedRoles: ['Trainer', 'Admin'] }
    },
      
      
      {path: 'match',
      component:MatchComponent,
      canActivate:[RoleGuard],
      data: {expectedRoles: ['Trainer', 'Admin']},
  },
      
      {path: 'team',
      component: TeamComponent,
      canActivate:[RoleGuard],
      data: {expectedRoles: ['Trainer', 'Admin']}
      },
      {path: 'medical', component:MedicalComponent,
      
      canActivate:[RoleGuard],
      data: {expectedRoles: ['Medical Staff', 'Admin']}
      },
      
      {path :'chatbot', component:ChatbotComponent},
      {path: 'notfound', component: NotfoundComponent},

      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
