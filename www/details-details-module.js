(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"],{

/***/ "./src/app/details/details.module.ts":
/*!*******************************************!*\
  !*** ./src/app/details/details.module.ts ***!
  \*******************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/details/details.page.ts");







var routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]
    }
];
var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());



/***/ }),

/***/ "./src/app/details/details.page.html":
/*!*******************************************!*\
  !*** ./src/app/details/details.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref='/'></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{this.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-card *ngIf=\"schedule\">\n    <ion-card-header>\n      <ion-card-title>{{schedule.dept}}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-list>\n        <ion-item lines=\"none\">\n          Phone : {{schedule.phone}}\n        </ion-item>\n        <ion-item lines=\"none\">\n          Office : {{schedule.office}}\n        </ion-item>\n        <ion-item *ngIf=\"schedule.time.both != '' \" lines=\"none\">\n          Office Hours : {{schedule.time.both}}\n        </ion-item>\n        <ion-item *ngIf=\"schedule.time.mmw != '' \" lines=\"none\">\n          Office Hours: MWF: {{schedule.time.mmw}}\n          Office Hours: TR: {{schedule.time.TR}}\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-grid no-padding>\n    <ion-row class=\"header\">\n      <ion-col size=\"1\">\n        SUB\n      </ion-col>\n      <ion-col size=\"1\">\n        CRS\n      </ion-col>\n      <ion-col size=\"1\">\n        SEC\n      </ion-col>\n      <ion-col size=\"4\">\n        Course Title\n      </ion-col>\n      <ion-col size=\"1\">\n        Days\n      </ion-col>\n      <ion-col size=\"1\">\n        Start\n      </ion-col>\n      <ion-col size=\"1\">\n        Stop\n      </ion-col>\n      <ion-col size=\"2\">\n        Room\n      </ion-col>\n\n    </ion-row>\n    <ion-row class=\"rowborder\" *ngFor=\"let entry of schedule.classSchedule\">\n      <ion-col size=\"1\">\n        {{entry.Sub}}\n      </ion-col>\n      <ion-col size=\"1\">\n        {{entry.Crs}}\n      </ion-col>\n      <ion-col size=\"1\">\n        {{entry.Sec}}\n      </ion-col>\n      <ion-col size=\"4\">\n        {{entry.CourseTitle}}\n      </ion-col>\n      <ion-col size=\"1\">\n        {{entry.Days}}\n      </ion-col>\n      <ion-col size=\"1\">\n        {{entry.Start}}\n      </ion-col>\n      <ion-col size=\"1\">\n        {{entry.Stop}}\n      </ion-col>\n      <ion-col size=\"2\">\n        {{entry.Room}}\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/details/details.page.scss":
/*!*******************************************!*\
  !*** ./src/app/details/details.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  background: #ffcd37 !important;\n  color: white; }\n\n.rowborder {\n  border-bottom: solid #ffcd37 !important; }\n\nion-col {\n  padding: 0px 1px !important; }\n\nion-grid {\n  font-size: 12px !important;\n  font-weight: bold !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YW9pL1dTQy9zcmMvYXBwL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBOEI7RUFDOUIsWUFDSixFQUFBOztBQUVBO0VBQ0ksdUNBQXVDLEVBQUE7O0FBRzNDO0VBQ0ksMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksMEJBQTBCO0VBQzFCLDRCQUE0QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmY2QzNyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlXHJcbn1cclxuXHJcbi5yb3dib3JkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgI2ZmY2QzNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY29se1xyXG4gICAgcGFkZGluZzogMHB4IDFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tZ3JpZHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/details/details.page.ts":
/*!*****************************************!*\
  !*** ./src/app/details/details.page.ts ***!
  \*****************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DetailsPage = /** @class */ (function () {
    function DetailsPage(activatedRoute, dataService) {
        this.activatedRoute = activatedRoute;
        this.dataService = dataService;
    }
    DetailsPage.prototype.ngOnInit = function () {
        this.name = this.activatedRoute.snapshot.paramMap.get('name');
        this.schedule = this.dataService.findTecherByName(this.name);
        console.log(this.schedule);
    };
    DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.page.html */ "./src/app/details/details.page.html"),
            styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/details/details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], DetailsPage);
    return DetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=details-details-module.js.map