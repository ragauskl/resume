webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div fxFill fxLayout=\"row\" fxHide.lt-md fxLayoutAlign=\"start start\">\n        <!-- SIDE PANEL -->\n        <div class=\"side\" fxLayout=\"column\" fxFlex=\"30%\" fxFlexAlign=\"stretch\">\n                <app-side-panel></app-side-panel>\n        </div>\n        <!-- MAIN PANEL -->\n        <div fxLayout=\"column\" fxFlex=\"70%\" fxFlexAlign=\"stretch\">\n            <app-header></app-header>\n            <app-main-panel></app-main-panel>\n        </div>\n    </div>\n\n    <div fxFill fxLayout=\"column\" fxHide.gt-md fxLayoutAlign=\"start start\" fxFlexAlign=\"stretch\">\n        <app-header fxFlexAlign=\"stretch\"></app-header>\n        <app-side-panel fxFlexAlign=\"stretch\" class=\"side\"></app-side-panel>\n        <app-main-panel></app-main-panel>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side {\n  background-color: #e0e0e5; }\n\n.sub-content {\n  margin: 0px 30px; }\n\nsvg {\n  height: auto; }\n\n.base {\n  background-color: white; }\n\n.title {\n  background-color: #373741;\n  padding: 10px 0px; }\n\n.photo {\n  -webkit-clip-path: polygon(0% 0%, 100% 50%, 0% 100%);\n          clip-path: polygon(0% 0%, 100% 50%, 0% 100%); }\n\n.wrap {\n  position: relative; }\n\n.rectangle {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 49.5%;\n  background: -webkit-gradient(linear, left top, left bottom, from(#ab58c4), to(#783b8a));\n  background: linear-gradient(#ab58c4, #783b8a); }\n\n.white-box {\n  background-color: white;\n  padding-left: 30px;\n  font-weight: bold;\n  letter-spacing: 2px; }\n\n.section-title {\n  background-color: white;\n  padding: 0px 10px;\n  text-align: center;\n  margin: 5px 0px;\n  white-space: nowrap; }\n\n.line {\n  height: 3px;\n  background: #783b8a;\n  width: 100%; }\n\n.name {\n  color: white;\n  letter-spacing: 5px; }\n\n.subtitle {\n  color: white;\n  font-family: 'Roboto Thin', sans-serif;\n  letter-spacing: 5px; }\n\n.project-title {\n  margin: 0; }\n\n.project-info {\n  margin: 5px 0px; }\n\n.sector-icon {\n  width: 150px;\n  margin-top: 16px; }\n\n.round-icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #373741; }\n\n.icon-img-s1 {\n  width: 25px;\n  height: 25px;\n  overflow: hidden; }\n\n.icon-img-s2 {\n  width: 15px;\n  height: 15px;\n  overflow: hidden; }\n\n.no-bottom-margin {\n  margin-bottom: 0px; }\n\n.no-margin {\n  margin: 0px; }\n\n.sm-vertical-margin {\n  margin: 2px 0px; }\n\n.mini-font {\n  font-size: 15px; }\n\nul {\n  padding-left: 20px; }\n\napp-skill-graph {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_json__ = __webpack_require__("../../../../../src/data.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.cv_data = __WEBPACK_IMPORTED_MODULE_1__data_json__;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_profile_img_profile_img_component__ = __webpack_require__("../../../../../src/app/components/profile-img/profile-img.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_side_panel_side_panel_component__ = __webpack_require__("../../../../../src/app/components/side-panel/side-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_main_panel_main_panel_component__ = __webpack_require__("../../../../../src/app/components/main-panel/main-panel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_profile_img_profile_img_component__["a" /* ProfileImgComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_side_panel_side_panel_component__["a" /* SidePanelComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_main_panel_main_panel_component__["a" /* MainPanelComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n    <h1 class=\"name sub-content\">{{cv_data.name}}</h1>\n    <h2 class=\"subtitle sub-content\">{{cv_data.title}}</h2>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side {\n  background-color: #e0e0e5; }\n\n.title {\n  background-color: #373741;\n  padding: 10px 0px; }\n\n.name {\n  color: white;\n  letter-spacing: 5px; }\n\n.subtitle {\n  color: white;\n  font-family: 'Roboto Thin', sans-serif;\n  letter-spacing: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_json__ = __webpack_require__("../../../../../src/data.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.cv_data = __WEBPACK_IMPORTED_MODULE_1__data_json__;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/main-panel/main-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"base\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n    <!-- INTRODUCTION -->\n    <div class=\"sub-content\" fxLayoutAlign=\"center center\">\n        <div class=\"line\"></div>\n        <h3 class=\"section-title\" ><span>INTRODUCTION</span></h3>\n        <div class=\"line\"></div>\n    </div>\n    <div class=\"sub-content\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\n        <p class=\"no-margin\" [innerHTML]=\"cv_data.intro\"></p>\n    </div>\n    <!-- SKILLS -->\n    <div class=\"sub-content\" fxLayoutAlign=\"center center\">\n        <div class=\"line\"></div>\n        <h3 class=\"section-title\" ><span>SKILLS</span></h3>\n        <div class=\"line\"></div>\n    </div>\n    <div class=\"sub-content\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <img width=\"100%\" src=\"assets/skills.svg\" alt=\"Skills chart\">\n    </div>\n\n    <div class=\"sub-content\" fxLayoutAlign=\"center center\">\n        <div class=\"line\"></div>\n        <h3 class=\"section-title\" ><span>PROJECT PORTFOLIO</span></h3>\n        <div class=\"line\"></div>\n    </div>\n    <div class=\"sub-content\" fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutGap=\"10px\">\n       <div *ngFor=\"let project of cv_data.projects\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\n            <p class=\"project-title\"> <b>{{project.name}}</b> - {{project.job}}</p>\n            <p class=\"project-info\" [innerHTML]=\"project.description\"></p>\n       </div>\n    </div>\n\n    <div class=\"sub-content\" fxLayoutAlign=\"center center\">\n        <div class=\"line\"></div>\n        <h3 class=\"section-title\" ><span>RELEVANT EXPIERENCE</span></h3>\n        <div class=\"line\"></div>\n    </div>\n\n    <div class=\"sub-content\" fxLayoutAlign=\"start start\">\n        <div *ngFor=\"let job of cv_data.experience\" fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start start\" fxLayoutGap=\"10px\">\n            <img class=\"sector-icon\" src=\"{{job.img}}\" alt=\"Workplace logo\">\n            <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutGap=\"10px\">\n                    <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutGap=\"5px\">\n                        <p class=\"project-info\"> <b>{{job.job}}</b></p>\n                        <p class=\"project-title\" >{{job.company}}</p>\n                        <p class=\"project-title\" > {{job.report}}</p>\n                        <p class=\"project-title\" > {{job.from}} - {{job.to}}</p>\n                    </div>\n                    <p class=\"job-description\" [innerHTML]=\"job.description\"></p>\n                    <h4 >PROJECTS:</h4>\n                    <div *ngFor=\"let project of job.projects\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\n                        <p class=\"project-title\"> <b>{{project.name}}</b></p>\n                        <p class=\"project-info\" [innerHTML]=\"project.description\"></p>\n                    </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/main-panel/main-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".base {\n  background-color: white;\n  padding: 10px 0px; }\n\n.section-title {\n  background-color: white;\n  padding: 0px 10px;\n  text-align: center;\n  margin: 5px 0px;\n  white-space: nowrap; }\n\n.line {\n  height: 3px;\n  background: #783b8a;\n  width: 100%; }\n\n.project-title {\n  margin: 0; }\n\n.project-info {\n  margin: 5px 0px; }\n\n.sector-icon {\n  width: 150px;\n  margin-top: 16px; }\n\n.no-margin {\n  margin: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main-panel/main-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_json__ = __webpack_require__("../../../../../src/data.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainPanelComponent = /** @class */ (function () {
    function MainPanelComponent() {
        this.cv_data = __WEBPACK_IMPORTED_MODULE_1__data_json__;
    }
    MainPanelComponent.prototype.ngOnInit = function () {
    };
    MainPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-main-panel',
            template: __webpack_require__("../../../../../src/app/components/main-panel/main-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/main-panel/main-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPanelComponent);
    return MainPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile-img/profile-img.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\" width=\"100%\">\n    <div class=\"rectangle\"></div>\n    <img class=\"photo\" src=\"assets/photo-wflip.jpg\" alt=\"Profile image\" width=\"100%\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile-img/profile-img.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".photo {\n  -webkit-clip-path: polygon(0% 0%, 100% 50%, 0% 100%);\n          clip-path: polygon(0% 0%, 100% 50%, 0% 100%); }\n\n.wrap {\n  position: relative; }\n\n.rectangle {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 49.5%;\n  background: -webkit-gradient(linear, left top, left bottom, from(#ab58c4), to(#783b8a));\n  background: linear-gradient(#ab58c4, #783b8a); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile-img/profile-img.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileImgComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileImgComponent = /** @class */ (function () {
    function ProfileImgComponent() {
    }
    ProfileImgComponent.prototype.ngOnInit = function () {
    };
    ProfileImgComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-profile-img',
            template: __webpack_require__("../../../../../src/app/components/profile-img/profile-img.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile-img/profile-img.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileImgComponent);
    return ProfileImgComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/side-panel/side-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"side\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n  <app-profile-img></app-profile-img>\n  <!-- CONTACTS -->\n  <div class=\"sub-content\" fxLayout=\"column\">\n      <div class=\"white-box\">\n          <p>CONTACTS</p>\n      </div>\n\n      <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start center\">\n          <div class=\"round-icon\" fxLayoutAlign=\"center center\">\n              <img class=\"icon-img-s1\" src=\"{{cv_data.contacts.location.img}}\" alt=\"contact icon\">\n          </div>\n          <p>{{cv_data.contacts.location.value}}</p>\n      </div>\n      <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start center\">\n          <div class=\"round-icon\" fxLayoutAlign=\"center center\">\n              <img class=\"icon-img-s1\" src=\"{{cv_data.contacts.email.img}}\" alt=\"contact icon\">\n          </div>\n          <p>{{cv_data.contacts.email.value}}</p>\n      </div>\n      <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start center\">\n          <div class=\"round-icon\" fxLayoutAlign=\"center center\">\n              <img class=\"icon-img-s1\" src=\"{{cv_data.contacts.mobile.img}}\" alt=\"contact icon\">\n          </div>\n          <p>{{cv_data.contacts.mobile.value}}</p>\n      </div>\n      <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start center\">\n          <div class=\"round-icon\" fxLayoutAlign=\"center center\">\n              <img class=\"icon-img-s2\" src=\"{{cv_data.contacts.linkedin.img}}\" alt=\"contact icon\">\n          </div>\n          <p><a target=\"_blank\" href=\"{{'http://' + cv_data.contacts.linkedin.value}}\">{{cv_data.contacts.linkedin.value}}</a></p>\n      </div>\n      <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"start center\">\n          <div class=\"round-icon\" fxLayoutAlign=\"center end\">\n              <img class=\"icon-img-s1\" src=\"{{cv_data.contacts.github.img}}\" alt=\"contact icon\">\n          </div>\n          <p><a target=\"_blank\" href=\"{{'http://' + cv_data.contacts.github.value}}\">{{cv_data.contacts.github.value}}</a></p>\n      </div>\n  </div>\n  <!-- LANGUAGES -->\n  <div class=\"sub-content\" fxLayout=\"column\">\n      <div class=\"white-box\">\n          <p>LANGUAGES</p>\n      </div>\n      <div *ngFor=\"let language of cv_data.languages\" fxLayout=\"column\">\n          <p class=\"no-bottom-margin\">{{language.name}}</p>\n          <p class=\"sm-vertical-margin mini-font\">{{language.level}}</p>\n      </div>\n  </div>\n  <!-- EDUCATION -->\n  <div class=\"sub-content\" fxLayout=\"column\">\n      <div class=\"white-box\">\n          <p>EDUCATION</p>\n      </div>\n      <img class=\"sector-icon\" src=\"{{cv_data.education.img}}\" alt=\"uni icon\">\n      <p class=\"no-bottom-margin\">{{cv_data.education.university}}</p>\n      <p class=\"sm-vertical-margin\"><b>{{cv_data.education.course}}</b></p>\n      <p class=\"sm-vertical-margin\">{{cv_data.education.from}} - {{cv_data.education.to}}</p>\n      <p class=\"sm-vertical-margin\"></p>\n      <p class=\"sm-vertical-margin\">Subjects studied:</p>\n      <ul>\n          <li *ngFor=\"let module of cv_data.education.modules\">{{module}}</li>\n      </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/side-panel/side-panel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side {\n  background-color: #e0e0e5; }\n\n.title {\n  background-color: #373741;\n  padding: 10px 0px; }\n\n.white-box {\n  background-color: white;\n  padding-left: 30px;\n  font-weight: bold;\n  letter-spacing: 2px; }\n\n.sector-icon {\n  width: 150px;\n  margin-top: 16px; }\n\n.round-icon {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #373741; }\n\n.icon-img-s1 {\n  width: 25px;\n  height: 25px;\n  overflow: hidden; }\n\n.icon-img-s2 {\n  width: 15px;\n  height: 15px;\n  overflow: hidden; }\n\n.no-bottom-margin {\n  margin-bottom: 0px; }\n\n.sm-vertical-margin {\n  margin: 2px 0px; }\n\n.mini-font {\n  font-size: 15px; }\n\nul {\n  padding-left: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/side-panel/side-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidePanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_json__ = __webpack_require__("../../../../../src/data.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidePanelComponent = /** @class */ (function () {
    function SidePanelComponent() {
        this.cv_data = __WEBPACK_IMPORTED_MODULE_1__data_json__;
    }
    SidePanelComponent.prototype.ngOnInit = function () {
    };
    SidePanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-side-panel',
            template: __webpack_require__("../../../../../src/app/components/side-panel/side-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/side-panel/side-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidePanelComponent);
    return SidePanelComponent;
}());



/***/ }),

/***/ "../../../../../src/data.json":
/***/ (function(module, exports) {

module.exports = {"name":"LINA RAGAUSKAITE","title":"Full-stack Javascript Developer","intro":"Hi, I'm a passionate software and web engineer. <b>Eager to learn</b>, <b>curious</b>, <b>determined</b> and <b>responsible</b> are four words that I believe describe me the best.\nI started programming from 10th grade and since then I realised that software engineering is something I would be thrilled to work on daily for the rest of my life. Initially, I was focusing on software engineering and took on placement as an <b>Undergraduate Software Engineer</b> in Sorion Ltd, automotive industry. However, during placement, over my free time, I gained a huge interest in full-stack development for both websites and mobile applications and since then I started to work on personal projects at home and use <b>Angular</b>, <b>Ionic</b> and <b>NodeJS</b> in all university projects.\nI love working on both sides of the spectrum, front-end and back-end, however, I feel that if I had to choose, back-end would be my stronger side. Besides coding, I also like to work with graphic design software and pervasive systems.\nI'm also an active person and love outdoor and indoor activities, while I love sports, I can't say I'm a fan of watching sports teams on television.","contacts":{"location":{"value":"Birmingham, UK","img":"assets/icons/ic-place.svg"},"email":{"value":"ragauskl@gmail.com","img":"assets/icons/ic-email.svg"},"mobile":{"value":"+44 749 205 1761","img":"assets/icons/ic-phone.svg"},"linkedin":{"value":"linkedin.com/in/ragauskl/","img":"assets/icons/linkedin.svg"},"github":{"value":"github.com/ragauskl","img":"assets/icons/github.svg"}},"skill_categories":[{"category":"Programming languages","skills":[{"name":"JavaScript","percentage":60,"img":"assets/icons/javascript.svg"},{"name":"TypeScript","percentage":55,"img":"assets/icons/typescript.svg"},{"name":"HTML","percentage":70,"img":"assets/icons/html.svg"}]},{"category":"Database solutions","skills":[{"name":"MongoDB","percentage":55,"img":"assets/icons/mongodb.svg"},{"name":"MSQL","percentage":50,"img":"assets/icons/msql.svg"}]},{"category":"Frameworks","skills":[{"name":"Angular","percentage":55,"img":"assets/icons/angular.svg"},{"name":"NodeJS","percentage":50,"img":"assets/icons/nodejs.svg"},{"name":"Ionic","percentage":60,"img":"assets/icons/ionic.svg"},{"name":"Electron","percentage":35,"img":"assets/icons/electron.svg"},{"name":"SCSS","percentage":60,"img":"assets/icons/sass.svg"}]},{"category":"Version control","skills":[{"name":"GIT","percentage":55,"img":"assets/icons/git.svg"},{"name":"Subversion","percentage":25,"img":"assets/icons/subversion.svg"}]},{"category":"Graphic and Web software","skills":[{"name":"Photoshop","percentage":55,"img":"assets/icons/adobe-photoshop.svg"},{"name":"Illustrator","percentage":35,"img":"assets/icons/adobe-illustrator.svg"},{"name":"Adobe XD","percentage":80,"img":"assets/icons/adobe-adobe-xd.svg"}]},{"category":"Embedded systems","skills":[{"name":"Arduino","percentage":50,"img":"assets/icons/arduino.svg"}]}],"projects":[{"name":"Route Fox","job":"Mobile Full-stack development","description":"Dissertation project (currently in progress) - a travel recommender system, that generates route suggestions, between 2+ points of interest, depending on various preferences of user such as how much time will be spent at a place, when does user want to arrive or depart, in what order should the place be visited, is the place visit optional or mandatory and prefered transport type. On top of generating an optimal route, users can save routes and live-track them. If a route is being live-tracked, the user will get notifications when the route cannot be continued due to unexpected traffic or user wandering off too far away from the planned route. To build front-end I am using Ionic and <b>Angular 5</b>. To manipulate maps <b>Google Maps</b>, <b>Directions</b> and <b>Places API's</b> are being used. The back-end is build using <b>NodeJS</b> and is connected to a <b>MongoDB</b> database."},{"name":"Environment monitoring system","job":"API development and embedded system support","description":"Project for Agile development module - for this project I was assigned to a team of students with various skills, our goal was to develop a hardware box with <b>ESP8266</b> and various <b>environment monitoring sensors</b>, API connected to a database and a front-end mobile application to allow access to environment data and sensor box information depending on user access level. I was responsible for developing an API, creating a database as well as providing support to hardware team. To build API I used <b>NodeJS</b>, and two communication protocols: <b>HTTP</b> for front-end requests and <b>MQMT</b> for communication with the sensor box. For database solution, we agreed to use <b>MongoDB</b>. To perform unit testing <b>Jasmine</b> was used."},{"name":"Events Map","job":"Web Full-stack developmen","description":"Project for full-stack development module - a social platform that allows users to create events and search for existing ones depending on various filters as well as view comments, save or attend events. Project front-end was developed with <b>Angular 4</b>, <b>Angular Flex-layout</b> and <b>Material</b>, as well as <b>Google Maps API</b> for map manipulation. For back-end, i used <b>NodeJS</b> and <b>ExpressJS</b>. During project, I learned to securely hash passwords and used <b>MongoDB</b> as a database solution."},{"name":"Wireless lock system","job":"Mobile Front-end and embedded system developement","description":"Project for Interactive pervasive computing module - a lock system with NFC tag reader, that is connected to a mobile application over Bluetooth. NFC tags were used to allow only authorized users to lock and unlock the locks, which were built using <b>Arduino</b> Uno microcontroller. A Bluetooth module was added to allow communication between the lock and a mobile application, built using <b>Ionic</b>, which was used to store authorized NFC tag ID's and synchronise data between multiple locks connected, as well as monitor lock states and see unauthorized access attempts."}],"experience":[{"company":"Sorion Electronics Limited, Birmingham","img":"assets/sorion-logo.png","job":"Undergraduate Software Engineer","report":"Reported to System Director and Software Team Manager","from":"25 Jun 2016","to":"29 Sep 2017","description":"At Sorion Ltd my responsibilities were to develop and maintain new features to company’s core product - Sextans-RT, which involved keeping up-to-date documentation, preparing presentations, participating in regular meetings and technical reviews, writing scripts and sometimes visiting customers site. As core product was developed using <b>VB6</b>, I got familiar with it, however, for new feature development, <b>C#.Net</b> and <b>VB.Net</b> were used to help company transfer to a newer programming language. Software development included work with <b>Subversion</b>, <b>TCP/IP</b>, <b>FTP</b>, <b>Serial ports</b> and <b>Microsoft SQL Server</b>.","projects":[{"name":"Pick-to-Light control engine","description":"A system whereby operators (usually working on assembly lines) are prompted by light illumination to pick the appropriate parts for an order. For the development of this project, i used <b>VB.Net</b> and Chilkat library for <b>TCP/IP</b> connection to hardware and as an <b>Inter-Process Communication</b> between this software and Sextans-RT. Pick-to-Light CE acted as a generic interface between Sextans-RT and the PTL hardware. End product contained a variety of features including hardware set-up, stock control, database storage, assistance light process with and without the use of barcode scanner, hardware real-time simulation to track expected behaviour and hardware maintenance mode."},{"name":"Multi-language support tool","description":"A multi-language support tool for Sextans-RT. For developing this project I used <b>C#.Net</b>. It consisted of a DLL and a parser software for generating possible phrases, from script and specification files, for translation. The software was used to scan Sextans project scripts and specification files and generate a list of all possible strings that will be displayed to end user, with multiple wildcards where required. This list was then translated by a professional translator and Sextans would use the DLL to replace English text on-screen with the matching translation."},{"name":"Layered Image Editor","description":"An image editing software and a DLL to be used by Sextans-RT. Software, written in <b>C#.Net</b> allow the creation of custom files that contain a base image and multiple layers of various shapes and text over it with various properties such as to make a layer interactive. To make custom image files usable by Sextans-RT from within scripts I had to write a DLL in <b>C#.Net</b> to generate image depending on various configurations and a <b>VB6</b> custom image control, which would use the DLL and then could be used by the Sextans-RT."}]}],"languages":[{"name":"English","level":"Professional working proficiency"},{"name":"Russian","level":"Professional working proficiency"},{"name":"Lithuanian","level":"Native"},{"name":"German","level":"Lower intermediate"}],"education":{"img":"assets/cov-uni.png","university":"Coventry Univeristy","course":"Computing BSc","from":2014,"to":2018,"modules":["Full-stack development","Programming, algorithms and data structures","Computer architecture and networks","Interactive pervasive computing","Design for usability","Agile development","Intellignet agents","Enterprise information systems","German lower intermediate"]}}

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map