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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
