import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BargraphComponent } from './bargraph/bargraph.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'bargraph', component: BargraphComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
