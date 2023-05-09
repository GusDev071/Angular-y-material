import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BTComponent } from './components/bt/bt.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { BottomTComponent } from './components/bottom-t/bottom-t.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ChipsComponent } from './components/chips/chips.component';
import { FechaComponent } from './components/fecha/fecha.component';


const routes: Routes = [
  {path:"",redirectTo:"autocomplete",pathMatch:"full"},
  {path:"autocomplete", component:AutocompleteComponent},
  {path:"badge", component:BadgeComponent},
  {path:"bt", component:BTComponent},
  {path:"bottom", component:BottomComponent},
  {path:"bottom-t", component:BottomTComponent},
  {path:"tarjetas", component:TarjetasComponent},
  {path:"checkbox", component:CheckboxComponent},
  {path:"chips", component:ChipsComponent},
  {path:"fecha", component:FechaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
