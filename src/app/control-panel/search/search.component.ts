import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {


  constructor() {
  }

  searchText(text: string) {
    text = text.toLowerCase();
    let tblBody = <HTMLTableElement>document.getElementById('ved');

    // очістка старой подсветкі
    if (text.length < 3) {
      for (let i = 2; i < tblBody.rows.length; i++) {
        let row = <HTMLTableRowElement>tblBody.rows[i];
        for (let j = 1; j < row.cells.length; j++) {
          let curCell = <HTMLTableCellElement>row.cells[j];
          curCell.style.backgroundColor = null;    // убрать старую подсветку
        }
      }
      return;
    }


    for (let i = 2; i < tblBody.rows.length; i++) {
      let row = <HTMLTableRowElement>tblBody.rows[i];
      for (let j = 1; j < row.cells.length; j++) {
        let curCell = <HTMLTableCellElement>row.cells[j];   // curCell - текущая ячейка
        if (curCell.innerHTML.toLowerCase().indexOf(text) != -1)    // ищем в текущей ячейке искомое значение
        {
          curCell.style.backgroundColor = 'yellow';    // если найдено, то подсветим
        }
      }
    }
  }

  ngOnInit() {
  }

}
