import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  
  {path:'',component:TabsPage,  children:[
    {
      path: 'feed',
      loadChildren: () => import('../feed/feed.module').then( m => m.FeedPageModule)
    },
    {
      path: 'medminders',
      loadChildren: () => import('../medminders/medminders.module').then( m => m.MedmindersPageModule)
    
    },
    {
      path: 'profile',
      loadChildren:  () => import('../profile/profile.module').then( m => m.ProfilePageModule)
    
    },
     {path:'',redirectTo:'feed',pathMatch:'full'}
  
  ]
}
   
  

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
