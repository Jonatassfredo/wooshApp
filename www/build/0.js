webpackJsonp([0],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoPageModule", function() { return CarrinhoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_components_module__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carrinho__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CarrinhoPageModule = /** @class */ (function () {
    function CarrinhoPageModule() {
    }
    CarrinhoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__carrinho__["a" /* CarrinhoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__carrinho__["a" /* CarrinhoPage */]),
            ],
        })
    ], CarrinhoPageModule);
    return CarrinhoPageModule;
}());

//# sourceMappingURL=carrinho.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsHelper; });
var UtilsHelper = /** @class */ (function () {
    function UtilsHelper() {
    }
    UtilsHelper.data = {
        sorting: function (array, field) {
            return array.sort(function (a, b) {
                var x = a[field];
                var y = b[field];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }
    };
    UtilsHelper.number = {
        formatCurrency: function (valor) {
            return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
            ;
        }
    };
    return UtilsHelper;
}());

//# sourceMappingURL=utilsHelper.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoModel; });
var ProdutoModel = /** @class */ (function () {
    function ProdutoModel() {
    }
    return ProdutoModel;
}());

//# sourceMappingURL=produtoModel.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcaoCarrinhoEnum; });
var AcaoCarrinhoEnum;
(function (AcaoCarrinhoEnum) {
    AcaoCarrinhoEnum[AcaoCarrinhoEnum["Adicionar"] = 1] = "Adicionar";
    AcaoCarrinhoEnum[AcaoCarrinhoEnum["Remover"] = 2] = "Remover";
})(AcaoCarrinhoEnum || (AcaoCarrinhoEnum = {}));
//# sourceMappingURL=AcaoCarrinhoEnum.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__real_real__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_by_order_by__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__real_real__["a" /* RealPipe */],
                __WEBPACK_IMPORTED_MODULE_2__order_by_order_by__["a" /* OrderByPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__real_real__["a" /* RealPipe */],
                __WEBPACK_IMPORTED_MODULE_2__order_by_order_by__["a" /* OrderByPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers_utilsHelper__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RealPipe = /** @class */ (function () {
    function RealPipe() {
    }
    RealPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1__app_helpers_utilsHelper__["a" /* UtilsHelper */].number.formatCurrency(value);
    };
    RealPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'real',
        })
    ], RealPipe);
    return RealPipe;
}());

//# sourceMappingURL=real.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers_utilsHelper__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (value, args) {
        var _ret = [];
        var _args = args.replace('-', '');
        if (args.indexOf('-') > -1) {
            _ret = __WEBPACK_IMPORTED_MODULE_1__app_helpers_utilsHelper__["a" /* UtilsHelper */].data.sorting(value, _args).reverse();
        }
        else {
            _ret = __WEBPACK_IMPORTED_MODULE_1__app_helpers_utilsHelper__["a" /* UtilsHelper */].data.sorting(value, args);
        }
        return _ret;
    };
    OrderByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'orderBy',
        })
    ], OrderByPipe);
    return OrderByPipe;
}());

//# sourceMappingURL=order-by.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantidade_quantidade__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_tab__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__quantidade_quantidade__["a" /* QuantidadeComponent */],
                __WEBPACK_IMPORTED_MODULE_3__tab_tab__["a" /* TabComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__quantidade_quantidade__["a" /* QuantidadeComponent */],
                __WEBPACK_IMPORTED_MODULE_3__tab_tab__["a" /* TabComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuantidadeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_models_produtoModel__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carrinho_carrinho__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_enums_AcaoCarrinhoEnum__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_helpers_configHelper__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuantidadeComponent = /** @class */ (function () {
    function QuantidadeComponent(carrinhoSrv, evt) {
        this.carrinhoSrv = carrinhoSrv;
        this.evt = evt;
        this.numero = 0;
        this.quantidadeAlterada = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */]();
    }
    QuantidadeComponent.prototype._registerEvent = function () {
        var _this = this;
        this.evt.subscribe(__WEBPACK_IMPORTED_MODULE_5__app_helpers_configHelper__["a" /* ConfigHelper */].Events.atualizaoQuantidadeProduto, function () {
            _this._atualizarQuantidade();
        });
    };
    QuantidadeComponent.prototype._atualizarQuantidade = function () {
        var quantidadeNoCarrinho = this.carrinhoSrv.getQuantidadeItem(this.produto);
        this.numero = quantidadeNoCarrinho;
    };
    QuantidadeComponent.prototype.ngOnInit = function () {
        this._atualizarQuantidade();
        this._registerEvent();
    };
    QuantidadeComponent.prototype.adicionar = function () {
        this.numero += 1;
        this.quantidadeAlterada.emit({
            quantidade: this.numero,
            acao: __WEBPACK_IMPORTED_MODULE_4__app_enums_AcaoCarrinhoEnum__["a" /* AcaoCarrinhoEnum */].Adicionar
        });
    };
    QuantidadeComponent.prototype.remover = function () {
        var _valorFinal = this.numero -= 1;
        if (_valorFinal <= 0)
            this.numero = 0;
        this.quantidadeAlterada.emit({
            quantidade: this.numero,
            acao: __WEBPACK_IMPORTED_MODULE_4__app_enums_AcaoCarrinhoEnum__["a" /* AcaoCarrinhoEnum */].Remover
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["D" /* Input */])('produto'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__app_models_produtoModel__["a" /* ProdutoModel */])
    ], QuantidadeComponent.prototype, "produto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], QuantidadeComponent.prototype, "quantidadeAlterada", void 0);
    QuantidadeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'quantidade',template:/*ion-inline-start:"E:\Desenvolvimento\TCC\1 - Projeto\Mobile\WooshApp\src\components\quantidade\quantidade.html"*/'<div>\n  <button round ion-button icon-only color="light" (click)="remover()">\n    -\n  </button>\n  <span class="numero">{{numero}}</span>\n  <button round ion-button icon-only color="dark" (click)="adicionar()">\n    +\n  </button>\n</div>'/*ion-inline-end:"E:\Desenvolvimento\TCC\1 - Projeto\Mobile\WooshApp\src\components\quantidade\quantidade.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_carrinho_carrinho__["a" /* CarrinhoProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* Events */]])
    ], QuantidadeComponent);
    return QuantidadeComponent;
}());

//# sourceMappingURL=quantidade.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabComponent = /** @class */ (function () {
    function TabComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TabComponent.prototype.ngOnInit = function () {
        this.tabs = [
            {
                icon: "pricetags",
                path: "CategoriaPage",
                label: "Categorias",
                isSelect: this.pagina == "Categoria"
            },
            {
                icon: "menu",
                path: "MeusPedidosPage",
                label: "Pedidos",
                isSelect: this.pagina == "Meus Pedidos"
            },
            {
                icon: "cart",
                path: "CarrinhoPage",
                label: "Carrinho",
                isSelect: this.pagina == "Meu Carrinho"
            },
            {
                icon: "contact",
                path: "MinhaContaPage",
                label: "Conta",
                isSelect: this.pagina == "Minha Conta"
            }
        ];
    };
    TabComponent.prototype.selecionarTab = function (path) {
        this.navCtrl.setRoot(path);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])("pagina"),
        __metadata("design:type", String)
    ], TabComponent.prototype, "pagina", void 0);
    TabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "tab",template:/*ion-inline-start:"E:\Desenvolvimento\TCC\1 - Projeto\Mobile\WooshApp\src\components\tab\tab.html"*/'<ion-footer class="tabs">\n  <div class="tab" *ngFor="let item of tabs" [ngClass]="{\'active\': item.isSelect}" (click)="selecionarTab(item.path)">\n    <ion-icon name="{{item.icon}}"></ion-icon>\n    <p>{{item.label}}</p>\n  </div>\n</ion-footer>'/*ion-inline-end:"E:\Desenvolvimento\TCC\1 - Projeto\Mobile\WooshApp\src\components\tab\tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavController */]])
    ], TabComponent);
    return TabComponent;
}());

//# sourceMappingURL=tab.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnderecoEntregaModel; });
var EnderecoEntregaModel = /** @class */ (function () {
    function EnderecoEntregaModel() {
    }
    return EnderecoEntregaModel;
}());

//# sourceMappingURL=enderecoModel.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_alert_alert__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_models_carrinhoModel__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carrinho_carrinho__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_enums_AcaoCarrinhoEnum__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_models_enderecoModel__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_endereco_endereco__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mensagens_mensagens__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_models_usuarioModel__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_helpers_configHelper__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var CarrinhoPage = /** @class */ (function () {
    function CarrinhoPage(navCtrl, navParams, carrinhoSrv, alertSrv, enderecoSrv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.carrinhoSrv = carrinhoSrv;
        this.alertSrv = alertSrv;
        this.enderecoSrv = enderecoSrv;
        this.usuarioLogado = new __WEBPACK_IMPORTED_MODULE_6__app_models_enderecoModel__["a" /* EnderecoEntregaModel */]();
        this.usuario = new __WEBPACK_IMPORTED_MODULE_9__app_models_usuarioModel__["a" /* UsuarioModel */]();
        this.totalProdutos = 0.0;
        this.carrinho = new __WEBPACK_IMPORTED_MODULE_1__app_models_carrinhoModel__["a" /* CarrinhoModel */]();
        this.enderecos = new Array();
        this.formaPagamento = ["Dinheiro", "Cartão de Crédito/Débito"];
        this.loadData();
    }
    CarrinhoPage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var enderecoEntregaResult, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.enderecoSrv.get()];
                    case 1:
                        enderecoEntregaResult = _a.sent();
                        if (enderecoEntregaResult.success) {
                            this.enderecos = (enderecoEntregaResult.data);
                            console.log("enderecos", this.enderecos);
                            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_10__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.enderecosEntrega, JSON.stringify(enderecoEntregaResult.data));
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log("Erro ao carregar os endereços", error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CarrinhoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.carrinhoSrv.getCarrinho().subscribe(function (data) {
            _this.carrinho = data;
        });
    };
    CarrinhoPage.prototype.quantidadeAlterada = function (produto, evt) {
        if (evt.acao == __WEBPACK_IMPORTED_MODULE_5__app_enums_AcaoCarrinhoEnum__["a" /* AcaoCarrinhoEnum */].Adicionar)
            this.carrinhoSrv.adicionarNovoItem(produto);
        else
            this.carrinhoSrv.removerItem(produto);
    };
    CarrinhoPage.prototype.finalizarPedido = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.alertSrv.confirm("Finalizar pedido", "Deseja concluir seu pedido?", function () { return __awaiter(_this, void 0, void 0, function () {
                        var pedidoResult;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.carrinhoSrv.SalvarPedido(this.carrinho)];
                                case 1:
                                    pedidoResult = _a.sent();
                                    if (pedidoResult.success) {
                                        this.carrinho.valorTotal = 0;
                                        this.carrinho.itens = [];
                                        this.carrinho.enderecoEntregaId = "";
                                        this.carrinho.formaPagamento = "";
                                        this.navCtrl.setRoot("MeusPedidosPage");
                                        this.alertSrv.toast("Pedido realizado com sucesso!", "bottom");
                                    }
                                    if (pedidoResult.success) {
                                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__mensagens_mensagens__["a" /* MensagensPage */]);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                catch (error) {
                    console.log("Problema ao enviar seu pedido", error);
                }
                return [2 /*return*/];
            });
        });
    };
    CarrinhoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: "page-carrinho",template:/*ion-inline-start:"E:\Desenvolvimento\TCC\1 - Projeto\Mobile\WooshApp\src\pages\carrinho\carrinho.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>Meu Carrinho</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content no-padding>\n\n    <div class="valor">\n\n        <h2>{{ carrinho.valorTotal | real }}</h2>\n\n        <small>seu pedido atual</small>\n\n    </div>\n\n    <div class="botao-finalizar">\n\n        <div class="botao" tappable (click)="finalizarPedido()">\n\n            Finalizar Pedido\n\n        </div>\n\n    </div>\n\n\n\n    <div class="entrega">\n\n        <ion-item no-lines style="border-radius: 10px;">\n\n            <ion-label class="entregaLabel" no-lines>\n\n                Entregar em:\n\n            </ion-label>\n\n            <ion-select [(ngModel)]="carrinho.enderecoEntregaId" cancelText="Cancelar" okText="Ok">\n\n                <ion-option value="{{ item._id }}" *ngFor="let item of enderecos">\n\n                    {{ item.rua }}, {{ item.numero }}, {{ item.bairro }}\n\n                </ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n    </div>\n\n    <div>\n\n        <ion-item no-lines style="border-radius: 10px;">\n\n            <ion-label class="entregaLabel" no-lines>\n\n                Forma de Pagamento:\n\n            </ion-label>\n\n            <ion-select [(ngModel)]="carrinho.formaPagamento" cancelText="Cancelar" okText="Ok">\n\n                <ion-option value="{{ item }}" *ngFor="let item of formaPagamento">\n\n                    {{ item }}\n\n                </ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n    </div>\n\n\n\n    <div class="produtos">\n\n        <div class="produto" *ngFor="let item of carrinho.itens" tappable>\n\n            <div class="imagem" [ngStyle]="{ \'background-image\': \'url(\' + item.Produto.foto + \')\' }"></div>\n\n            <div class="titulo">{{ item.Produto.nome }}</div>\n\n            <div class="descricao">{{ item.Produto.descricao }}</div>\n\n            <div class="preco">{{ item.Produto.preco | real }}</div>\n\n            <div class="quantidade">\n\n                <quantidade [produto]="item.Produto" (quantidadeAlterada)="quantidadeAlterada(item.Produto, $event)">\n\n                </quantidade>\n\n            </div>\n\n            <ion-item>\n\n                <ion-label floating>Observações</ion-label>\n\n                <ion-input [(ngModel)]="item.Observacoes" type="text"></ion-input>\n\n            </ion-item>\n\n        </div>\n\n    </div>\n\n    <div>\n\n        <ion-item no-lines style="background-color: transparent !important;"></ion-item>\n\n        <ion-item no-lines style="background-color: transparent !important;"></ion-item>\n\n    </div>\n\n</ion-content>\n\n<tab [pagina]="\'Meu Carrinho\'"></tab>'/*ion-inline-end:"E:\Desenvolvimento\TCC\1 - Projeto\Mobile\WooshApp\src\pages\carrinho\carrinho.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_carrinho_carrinho__["a" /* CarrinhoProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_endereco_endereco__["a" /* EnderecoEntregaProvider */]])
    ], CarrinhoPage);
    return CarrinhoPage;
}());

//# sourceMappingURL=carrinho.js.map

/***/ })

});
//# sourceMappingURL=0.js.map