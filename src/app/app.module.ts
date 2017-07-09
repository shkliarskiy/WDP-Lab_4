import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { TableComponent } from './table/table.component';
import { DataService } from './data.service';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { FiltersComponent } from './control-panel/filters/filters.component';
import { SearchComponent } from './control-panel/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ControlPanelComponent,
    FiltersComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
