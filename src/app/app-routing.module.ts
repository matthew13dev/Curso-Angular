import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventsComponent } from './components/events/events.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  {path:"", component:FirstComponentComponent},
  {path:"list", component:ListRenderComponent},
  {path:"change", component:ChangeNumberComponent},
  {path:"directives", component:DirectivesComponent},
  {path:"emitter", component:EmitterComponent},
  {path:"events", component:EventsComponent},
  {path:"fisrt", component:FirstComponentComponent},
  {path:"if", component:IfRenderComponent},
  {path:"parent", component:ParentDataComponent},
  {path:"pipes", component:PipesComponent},
  {path:"two", component:TwoWayBindingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
