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
import { DivisorComponent } from './components/divisor/divisor.component';
import { EpComponent } from './components/ep/ep.component';
import { FormucampoComponent } from './components/formucampo/formucampo.component';
import { GrlComponent } from './components/grl/grl.component';
import { IcnComponent } from './components/icn/icn.component';
import { InpComponent } from './components/inp/inp.component';
import { LiComponent } from './components/li/li.component';
import { MenuComponent } from './components/menu/menu.component';
import { PganComponent } from './components/pgan/pgan.component';
import { PgbComponent } from './components/pgb/pgb.component';
import { PgsComponent } from './components/pgs/pgs.component';
import { RbkComponent } from './components/rbk/rbk.component';
import { RppComponent } from './components/rpp/rpp.component';
import { SleComponent } from './components/sle/sle.component';
import { SinvComponent } from './components/sinv/sinv.component';
import { StComponent } from './components/st/st.component';
import { SliderComponent } from './components/slider/slider.component';
import { SnbComponent } from './components/snb/snb.component';
import { ShComponent } from './components/sh/sh.component';
import { SppComponent } from './components/spp/spp.component';  
import { TableComponent } from './components/table/table.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { TooltipComponent } from '@angular/material/tooltip';
import { TreeComponent } from './components/tree/tree.component';




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
  {path:"divisor", component:DivisorComponent},
  {path:"ep", component:EpComponent},
  {path:"formucampo", component:FormucampoComponent},
  {path:"grl", component:GrlComponent},
  {path:"icn", component:IcnComponent},
  {path:"inp", component:InpComponent},
  {path:"li", component:LiComponent},
  {path:"menu", component:MenuComponent},
  {path:"pgan", component:PganComponent},
  {path:"pgb", component:PgbComponent},
  {path:"pgs", component:PgsComponent},
  {path:"rbk", component:RbkComponent},
  {path:"rpp", component:RppComponent},
  {path:"sle", component:SleComponent},
  {path:"sinv", component:SinvComponent},
  {path:"st", component:StComponent},
  {path:"slider", component:SliderComponent},
  {path:"snb", component:SnbComponent},
  {path:"sh", component:ShComponent},
  {path:"spp", component:SppComponent},
  {path:"table", component:TableComponent},
  {path:"tabs", component:TabsComponent},
  {path:"tab", component:TabComponent},
  {path:"tooltip", component:TooltipComponent},
  {path:"tree", component:TreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
