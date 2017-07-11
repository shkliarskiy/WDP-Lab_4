webpackJsonp([2,4],{

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<app-control-panel></app-control-panel>\n\n<div class=\"row>\">\n  <div class=\"col-md-2\"></div>\n  <div class=\"col-sm-12 col-md-8\">\n    <app-table></app-table>\n  </div>\n  <div class=\"col-md-2\"></div>\n</div>\n"

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n  <nav class=\"navbar navbar-inverse \" role=\"navigation\" >\n    <div class=\"container-fluid\">\n      <div class=\"row navbar-header col-sm-12\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#controlPanel\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <div class=\"navbar-brand\">Контрольна панель</div>\n      </div>\n      <div class=\"row collapse navbar-collapse\" id=\"controlPanel\">\n        <app-filters></app-filters>\n        <app-search></app-search>\n      </div>\n    </div>\n  </nav>\n</main>\n"

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav\">\n  <li class=\"form-inline\">\n    <label class=\"label\">товар: </label>\n    <select class=\"form-control input-sm\" [(ngModel)]=\"selectedTovar\"\n            (change)=\"setTovarFilter()\">\n      <option [ngValue]=\"allTovari\">{{allTovari.NAMET}}</option>\n      <option *ngFor=\"let tovar of tovariList\" [ngValue]=\"tovar\">\n        {{tovar.NAMET}}\n      </option>\n    </select>\n  </li>\n  <li class=\"form-inline form-group\">\n    <label class=\"label control-label\">склад: </label>\n    <input type=\"search\" placeholder=\"номер складу\" class=\"input-sm form-control\"\n           (keyup)=\"setSkladFilter()\" [(ngModel)]=\"selectedSklad\"/>\n  </li>\n  <li class=\"form-inline form-group\">\n    <label class=\"label control-label\">&nbsp;</label>\n    <button type=\"button\" class=\"btn btn-sm btn-warning  input-sm form-control\"\n            (click)=\"removeFilters()\"><span class=\"glyphicon glyphicon-remove\"></span> </button>\n  </li>\n</ul>\n"

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav navbar-right\">\n  <li class=\"form-inline\">\n    <label class=\"label control-label\">пошук </label>\n    <input type=\"search\" placeholder=\"не менше 3-х літер\"\n           class=\"input-sm form-control\"\n           (keyup)=\"searchText($event.target.value)\">\n  </li>\n</ul>\n"

/***/ }),

/***/ 159:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered\" id=\"ved\">\n  <caption id=\"title\">ОБОРОТНАЯ ВЕДОМОСТЬ</caption>\n  <thead>\n  <tr>\n    <th>&nbsp;</th>\n    <th class=\"col-xs-2 text-center\">Назва товара</th>\n    <th class=\"col-xs-1 text-center\">Номер складу</th>\n    <th class=\"col-xs-2 text-center\">Залишок на початок місяця</th>\n    <th class=\"col-xs-2 text-center\">Прибуток</th>\n    <th class=\"col-xs-2 text-center\">Вибуток</th>\n    <th class=\"col-xs-2 text-center\">Залишок на кінець місяця</th>\n  </tr>\n  <tr>\n    <td class=\"expand\" (click)=\"hideDetails = !hideDetails\">&nbsp;</td>\n    <td>NAMET</td>\n    <td>N</td>\n    <td>O</td>\n    <td>P</td>\n    <td>R</td>\n    <td>S</td>\n  </tr>\n  </thead>\n\n  <!-- тело таблицы создается динамически в скрипте -->\n  <tbody>\n  <ng-template ngFor let-tovar [ngForOf]=\"tovari\" let-i=\"index\">\n    <tr *ngIf=\"filterRows(tovar.KODT,tovar.N).compare()\"\n        class=\"{{tovar.N == 0 ? 'subtotal' : 'detail' }}\"\n        [hidden]=\"tovar.N > 0 ?  hideDetails: false\">\n      <td>{{i+1}}</td>\n      <td class=\"text-left\">{{findNamet(tovar.KODT, tovar.N)}}</td>\n      <td class=\"text-center\">{{tovar.N > 0 ? tovar.N : ''}}</td>\n      <td class=\"text-right\">{{tovar.O.toFixed(2)}}</td>\n      <td class=\"text-right\">{{tovar.P.toFixed(2)}}</td>\n      <td class=\"text-right\">{{tovar.R.toFixed(2)}}</td>\n      <td class=\"text-right\">{{(tovar.O + tovar.P - tovar.R).toFixed(2)}}</td>\n    </tr>\n  </ng-template>\n  </tbody>\n</table>\n"

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76);


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(51);
__webpack_require__(162);
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getTovari = function () {
        return this.http.get('assets/db/tovari.json')
            .map(function (response) { return response.json(); });
    };
    DataService.prototype.getSpravochnik = function () {
        return this.http.get('assets/db/spravochnik.json')
            .map(function (response) { return response.json(); });
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], DataService);
exports.DataService = DataService;
exports.ControlPanelFilters = {
    kodTovara: 999,
    nomerSklada: 999
};
exports.ALL_TOVARI = {
    KODT: 999,
    NAMET: 'Всі товари'
};
var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 75;


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var platform_browser_dynamic_1 = __webpack_require__(85);
var app_module_1 = __webpack_require__(87);
var environment_1 = __webpack_require__(92);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__(155)
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(24);
var core_1 = __webpack_require__(2);
var forms_1 = __webpack_require__(84);
var http_1 = __webpack_require__(51);
var app_component_1 = __webpack_require__(86);
var table_component_1 = __webpack_require__(91);
var data_service_1 = __webpack_require__(31);
var control_panel_component_1 = __webpack_require__(88);
var filters_component_1 = __webpack_require__(89);
var search_component_1 = __webpack_require__(90);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            table_component_1.TableComponent,
            control_panel_component_1.ControlPanelComponent,
            filters_component_1.FiltersComponent,
            search_component_1.SearchComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        providers: [data_service_1.DataService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var ControlPanelComponent = (function () {
    function ControlPanelComponent() {
    }
    ControlPanelComponent.prototype.ngOnInit = function () {
    };
    return ControlPanelComponent;
}());
ControlPanelComponent = __decorate([
    core_1.Component({
        selector: 'app-control-panel',
        template: __webpack_require__(156)
    })
], ControlPanelComponent);
exports.ControlPanelComponent = ControlPanelComponent;
//# sourceMappingURL=control-panel.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var data_service_1 = __webpack_require__(31);
var FiltersComponent = (function () {
    function FiltersComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.allTovari = data_service_1.ALL_TOVARI;
        this.dataService.getSpravochnik()
            .subscribe(function (response) {
            _this.tovariList = response;
        });
    }
    FiltersComponent.prototype.setTovarFilter = function () {
        data_service_1.ControlPanelFilters.kodTovara = this.selectedTovar.KODT;
    };
    FiltersComponent.prototype.setSkladFilter = function () {
        data_service_1.ControlPanelFilters.nomerSklada = this.selectedSklad == '' ? 999 : this.selectedSklad;
    };
    FiltersComponent.prototype.removeFilters = function () {
        data_service_1.ControlPanelFilters.nomerSklada = 999;
        data_service_1.ControlPanelFilters.kodTovara = 999;
        this.selectedTovar = data_service_1.ALL_TOVARI;
    };
    FiltersComponent.prototype.ngOnInit = function () {
    };
    return FiltersComponent;
}());
FiltersComponent = __decorate([
    core_1.Component({
        selector: 'app-filters',
        template: __webpack_require__(157)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object])
], FiltersComponent);
exports.FiltersComponent = FiltersComponent;
var _a;
//# sourceMappingURL=filters.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.searchText = function (text) {
        text = text.toLowerCase();
        var tblBody = document.getElementById('ved');
        // очістка старой подсветкі
        if (text.length < 3) {
            for (var i = 2; i < tblBody.rows.length; i++) {
                var row = tblBody.rows[i];
                for (var j = 1; j < row.cells.length; j++) {
                    var curCell = row.cells[j];
                    curCell.style.backgroundColor = null; // убрать старую подсветку
                }
            }
            return;
        }
        for (var i = 2; i < tblBody.rows.length; i++) {
            var row = tblBody.rows[i];
            for (var j = 1; j < row.cells.length; j++) {
                var curCell = row.cells[j]; // curCell - текущая ячейка
                if (curCell.innerHTML.toLowerCase().indexOf(text) != -1) {
                    curCell.style.backgroundColor = 'yellow'; // если найдено, то подсветим
                }
            }
        }
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'app-search',
        template: __webpack_require__(158)
    }),
    __metadata("design:paramtypes", [])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var data_service_1 = __webpack_require__(31);
var _ = __webpack_require__(154);
var TableComponent = (function () {
    function TableComponent(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.hideDetails = false;
        this.dataService.getTovari()
            .subscribe(function (data) {
            _this.tovari = data.sort(function (a, b) {
                return a.KODT - b.KODT;
            });
            var tovarKodes = _this.getKODT();
            var _loop_1 = function (kodTovara) {
                // console.log(kodTovara);
                var firstKodTovarRow = _.findIndex(_this.tovari, function (item) {
                    return item.KODT == kodTovara;
                });
                var lastKodTowarRow = firstKodTovarRow + tovarKodes[kodTovara];
                var tovarRows = _.slice(_this.tovari, firstKodTovarRow, lastKodTowarRow);
                // console.log(tovarRows.length);
                var subtotal = tovarRows.reduce(function (sum, row) {
                    return { KODT: row.KODT, N: 0, O: sum.O + row.O, P: sum.P + row.P, R: sum.R + row.R };
                }, { KODT: 0, N: 0, O: 0, P: 0, R: 0 });
                // console.log(subtotal);
                _this.tovari.splice(lastKodTowarRow, 0, subtotal);
            };
            for (var kodTovara in tovarKodes) {
                _loop_1(kodTovara);
            }
        });
        this.dataService.getSpravochnik()
            .subscribe(function (data) {
            _this.spravochnik = data;
            // console.log(this.spravochnik);
        });
    }
    // возвращает  количество строк в `tovari`
    // по каждому коду товара в виде {код:кол-во}
    TableComponent.prototype.getKODT = function () {
        return _.countBy(this.tovari, function (item) { return item.KODT; });
    };
    TableComponent.prototype.findNamet = function (kodTovara, nonerSklada) {
        for (var i in this.spravochnik) {
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
    };
    TableComponent.prototype.filterRows = function (kodTovara, nomerSklada) {
        var currentRule = {};
        currentRule.kt = data_service_1.ControlPanelFilters.kodTovara === 999 ? 999 : -1;
        currentRule.ns = data_service_1.ControlPanelFilters.nomerSklada === 999 ? 999 : -1;
        var _cFilt = data_service_1.ControlPanelFilters;
        var filerRules = [
            {
                kt: 999,
                ns: 999,
                fn: function () { return true; }
            },
            {
                kt: 999,
                ns: -1,
                fn: function () { return _cFilt.kodTovara === 999 && _cFilt.nomerSklada == nomerSklada; }
            },
            {
                kt: -1,
                ns: 999,
                fn: function () { return _cFilt.kodTovara === kodTovara && _cFilt.nomerSklada === 999; }
            },
            {
                kt: -1,
                ns: -1,
                fn: function () { return _cFilt.kodTovara == kodTovara && _cFilt.nomerSklada == nomerSklada; }
            }
        ];
        return {
            compare: function () {
                var filt = _.filter(filerRules, { kt: currentRule.kt, ns: currentRule.ns });
                return filt[0].fn();
            }
        };
    }; // end filerRows()
    TableComponent.prototype.ngOnInit = function () {
    };
    return TableComponent;
}());
TableComponent = __decorate([
    core_1.Component({
        selector: 'app-table',
        template: __webpack_require__(159)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof data_service_1.DataService !== "undefined" && data_service_1.DataService) === "function" && _a || Object])
], TableComponent);
exports.TableComponent = TableComponent;
var _a;
//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[192]);
//# sourceMappingURL=main.bundle.js.map