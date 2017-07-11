import {Component, OnInit} from '@angular/core';
import {DataService, ControlPanelFilters} from '../data.service';
import {ITovari, ISprv, IRule} from '../data';

import * as _ from 'lodash';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  public tovari: ITovari[];
  public spravochnik: ISprv[];

  public hideDetails = false;

  constructor(private dataService: DataService) {

    this.dataService.getTovari()
      .subscribe(data => {
        this.tovari = data.sort(function (a, b) {
          return a.KODT - b.KODT;
        });

        const tovarKodes: Object = this.getKODT();

        for (const kodTovara in tovarKodes) {
          // console.log(kodTovara);
          const firstKodTovarRow: number = _.findIndex(this.tovari, item => {
            return item.KODT == kodTovara;
          });

          const lastKodTowarRow = firstKodTovarRow + tovarKodes[kodTovara];

          const tovarRows: ITovari[] = _.slice(this.tovari, firstKodTovarRow, lastKodTowarRow);
          // console.log(tovarRows.length);

          const subtotal: ITovari = tovarRows.reduce((sum: ITovari, row: ITovari) => {
            return {KODT: row.KODT, N: 0, O: sum.O + row.O, P: sum.P + row.P, R: sum.R + row.R};
          }, {KODT: 0, N: 0, O: 0, P: 0, R: 0});
          // console.log(subtotal);

          this.tovari.splice(lastKodTowarRow, 0, subtotal);

        }
      });

    this.dataService.getSpravochnik()
      .subscribe(data => {
        this.spravochnik = data;
        // console.log(this.spravochnik);
      });

  }

  // возвращает  количество строк в `tovari`
  // по каждому коду товара в виде {код:кол-во}
  private getKODT(): Object {
    return _.countBy(this.tovari, item => item.KODT);
  }

  private findNamet(kodTovara: number, nonerSklada: number): string {
    for (const i in this.spravochnik) {
      if (this.spravochnik[i]['KODT'] === kodTovara) {
        if (nonerSklada === 0) {
          return this.spravochnik[i]['NAMET'] + ' - всього';
        }
        else {
          return this.spravochnik[i]['NAMET'];
        }
      }
    }
    return 'не знайдено';
  }


  filterRows(kodTovara: number, nomerSklada: number) {

    const currentRule = <IRule>{};
    currentRule.kt = ControlPanelFilters.kodTovara === 999 ? 999 : -1;
    currentRule.ns = ControlPanelFilters.nomerSklada === 999 ? 999 : -1;

    const _cFilt = ControlPanelFilters;

    const filerRules = [
      {
        kt: 999,
        ns: 999,
        fn: () => true
      },
      {
        kt: 999,
        ns: -1,
        fn: () => _cFilt.kodTovara === 999 && _cFilt.nomerSklada == nomerSklada
      },
      {
        kt: -1,
        ns: 999,
        fn: () => _cFilt.kodTovara === kodTovara && _cFilt.nomerSklada === 999
      },
      {
        kt: -1,
        ns: -1,
        fn: () => _cFilt.kodTovara == kodTovara && _cFilt.nomerSklada == nomerSklada
      }
    ];

    return {
      compare: (): boolean => {
        const filt = _.filter(filerRules, {kt: currentRule.kt, ns: currentRule.ns});
        return filt[0].fn();
      }
    };

  }   // end filerRows()


  ngOnInit() {
  }

}
