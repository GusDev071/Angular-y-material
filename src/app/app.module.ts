import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatBadgeModule} from '@angular/material/badge';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { MatCardModule } from '@angular/material/card';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { BadgeComponent } from './components/badge/badge.component';
import { BTComponent } from './components/bt/bt.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { BottomComponent } from './components/bottom/bottom.component';
import { BottomTComponent } from './components/bottom-t/bottom-t.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FormsModule} from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ChipsComponent } from './components/chips/chips.component';
import {MatChipsModule} from '@angular/material/chips';
import { Chips2Component } from './components/chips2/chips2.component';
import { Chips3Component } from './components/chips3/chips3.component';
import {MatCommonModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FechaComponent } from './components/fecha/fecha.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DivisorComponent } from './components/divisor/divisor.component';
import { EpComponent } from './components/ep/ep.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormucampoComponent } from './components/formucampo/formucampo.component';
import { GrlComponent } from './components/grl/grl.component';
import { IcnComponent } from './components/icn/icn.component';
import { InpComponent } from './components/inp/inp.component';
import { MatSelectModule } from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import { LiComponent } from './components/li/li.component';
import { MenuComponent } from './components/menu/menu.component';
import { PganComponent } from './components/pgan/pgan.component';
import { PgbComponent } from './components/pgb/pgb.component';
import { PgsComponent } from './components/pgs/pgs.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
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
import {MatRippleModule} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTreeModule} from '@angular/material/tree';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TreeComponent } from './components/tree/tree.component';
import { Tree1Component } from './components/tree/tree1/tree1.component';
import { Tree2Component } from './components/tree/tree2/tree2.component';
import { Tree3Component } from './components/tree/tree3/tree3.component';
import { Tree4Component } from './components/tree/tree4/tree4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TarjetasComponent,
    AutocompleteComponent,
    BadgeComponent,
    BTComponent,
    BottomComponent,
    BottomTComponent,
    CheckboxComponent,
    ChipsComponent,
    Chips2Component,
    Chips3Component,
    FechaComponent,
    DivisorComponent,
    EpComponent,
    FormucampoComponent,
    GrlComponent,
    IcnComponent,
    InpComponent,
    LiComponent,
    MenuComponent,
    PganComponent,
    PgbComponent,
    PgsComponent,
    RbkComponent,
    RppComponent,
    SleComponent,
    SinvComponent,
    StComponent,
    SliderComponent,
    SnbComponent,
    ShComponent,
    SppComponent,
    TableComponent,
    TabsComponent,
    TabComponent,
    TooltipComponent,
    TreeComponent,
    Tree1Component,
    Tree2Component,
    Tree3Component,
    Tree4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    FormsModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatCommonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatSelectModule,
    MatGridListModule,
    MatPaginatorModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTreeModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
