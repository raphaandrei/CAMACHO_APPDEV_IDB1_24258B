import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { AdminGuard } from './admin.guard'; // Import AdminGuard

const routes: Routes = [
  { 
    path: 'parent',
    component: ParentComponent,
    children: [
      { path: 'child-one', component: ChildOneComponent },
      { path: 'child-two', component: ChildTwoComponent },
      { path: '', redirectTo: 'child-one', pathMatch: 'full' } // Default child route
    ]
  },
  { 
    path: 'admin', 
    component: ParentComponent, // Change this to your actual AdminComponent
    canActivate: [AdminGuard], // Protect this route
    children: [
      { path: 'dashboard', component: ChildOneComponent }, 
      { path: 'users', component: ChildTwoComponent }
    ]
  },
  { path: '', redirectTo: '/parent', pathMatch: 'full' } // Redirect root to parent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
