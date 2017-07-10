import {Component, OnInit} from '@angular/core';
import {DataService, ControlPanelFilters, ALL_TOVARI} from '../../data.service';
import {ISprv} from '../../data';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent implements OnInit {
  public tovariList: ISprv[];
  public allTovari = ALL_TOVARI;

  public selectedTovar;
  public selectedSklad;

  constructor(private dataService: DataService) {

    this.dataService.getSpravochnik()
      .subscribe(response => {
        this.tovariList = response;
      });

  }

  setTovarFilter() {
    ControlPanelFilters.kodTovara = this.selectedTovar.KODT;
  }

  setSkladFilter() {
    ControlPanelFilters.nomerSklada = this.selectedSklad == '' ? 999 : this.selectedSklad;
  }

  removeFilters() {
    ControlPanelFilters.nomerSklada = 999;
    ControlPanelFilters.kodTovara = 999;
    this.selectedTovar = ALL_TOVARI;
  }

  ngOnInit() {
  }

}
