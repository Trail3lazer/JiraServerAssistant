(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+nnI":
/*!*****************************************************!*\
  !*** ./src/app/components/issue/issue.component.ts ***!
  \*****************************************************/
/*! exports provided: IssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueComponent", function() { return IssueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_services_issue_issue_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/issue/issue.service */ "ciPP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




var _c0 = ["issueRef"];
function IssueComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.issue.fields.assignee.avatarUrls["32x32"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r1.issue.fields.assignee.displayName);
} }
function IssueComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} }
function IssueComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.issue.fields.priority.iconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r4.issue.fields.priority.name);
} }
function IssueComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssueComponent_div_10_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var transition_r8 = ctx.$implicit; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.doTransition(transition_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var transition_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", transition_r8.to.name, " ");
} }
function IssueComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IssueComponent_div_10_div_2_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var transitions_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", transitions_r6);
} }
var IssueComponent = /** @class */ (function () {
    function IssueComponent(issueService) {
        this.issueService = issueService;
        this.dropdownHidden = true;
    }
    IssueComponent.prototype.ngOnInit = function () {
        this.transitions$ = this.issueService.getTransitions(this.issue);
    };
    IssueComponent.prototype.hideDropdown = function (event) {
        if (this.dropdownHidden && this.issueRef.nativeElement.contains(event.target)) {
            this.dropdownHidden = !this.dropdownHidden;
        }
        else {
            this.dropdownHidden = true;
        }
    };
    IssueComponent.prototype.doTransition = function (transition) {
        this.issueService.transition(transition, this.issue.id).subscribe();
    };
    IssueComponent.ɵfac = function IssueComponent_Factory(t) { return new (t || IssueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_issue_issue_service__WEBPACK_IMPORTED_MODULE_1__["IssueService"])); };
    IssueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IssueComponent, selectors: [["app-issue"]], viewQuery: function IssueComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.issueRef = _t.first);
        } }, hostBindings: function IssueComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssueComponent_click_HostBindingHandler($event) { return ctx.hideDropdown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        } }, inputs: { issue: "issue" }, decls: 12, vars: 7, consts: [["issueRef", ""], [1, "card", "card-body"], [1, "card-text", "truncate"], [1, "d-flex", "justify-content-between"], ["class", "rounded", 3, "src", "alt", 4, "ngIf", "ngIfElse"], ["unassigned", ""], ["class", "rounded mt-auto priority", 3, "src", "alt", 4, "ngIf"], ["class", "context-menu", 4, "ngIf"], [1, "rounded", 3, "src", "alt"], ["src", "https://img.icons8.com/pastel-glyph/2x/person-male--v2.png", "alt", "Unassigned", 1, "rounded"], [1, "rounded", "mt-auto", "priority", 3, "src", "alt"], [1, "context-menu"], [1, "list-group"], ["class", "list-group-item list-group-item-action", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "list-group-item-action", 3, "click"], [1, "icon-login"]], template: function IssueComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IssueComponent_img_6_Template, 1, 2, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, IssueComponent_ng_template_7_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, IssueComponent_img_9_Template, 1, 2, "img", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, IssueComponent_div_10_Template, 3, 1, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.issue.fields.summary);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.issue.fields.assignee)("ngIfElse", _r2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.issue.fields.priority);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 5, !ctx.dropdownHidden && ctx.transitions$));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["img[_ngcontent-%COMP%] {\n  max-block-size: 20px;\n}\n\n.truncate[_ngcontent-%COMP%] {\n  max-height: 1.5rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.truncate[_ngcontent-%COMP%]:hover {\n  max-height: none;\n}\n\n.context-menu[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.context-menu[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  z-index: 1;\n  box-shadow: 1px 1px 5px #96969680;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pc3N1ZS9pc3N1ZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtBQUlKOztBQUhJO0VBQ0ksVUFBQTtFQUNBLGlDQUFBO0FBS1IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lzc3VlL2lzc3VlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nXHJcbiAgICBtYXgtYmxvY2stc2l6ZTogMjBweFxyXG5cclxuLnRydW5jYXRlIFxyXG4gICAgbWF4LWhlaWdodDogMS41cmVtXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpc1xyXG5cclxuLnRydW5jYXRlOmhvdmVyXHJcbiAgICBtYXgtaGVpZ2h0OiBub25lXHJcblxyXG4uY29udGV4dC1tZW51XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgIC5saXN0LWdyb3VwLWl0ZW1cclxuICAgICAgICB6LWluZGV4OiAxXHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggIzk2OTY5NjgwIl19 */"] });
    return IssueComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IssueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-issue',
                templateUrl: './issue.component.html',
                styleUrls: ['./issue.component.sass'],
            }]
    }], function () { return [{ type: _app_services_issue_issue_service__WEBPACK_IMPORTED_MODULE_1__["IssueService"] }]; }, { issue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], issueRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['issueRef']
        }], hideDropdown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\development\JiraServerAssistant\src\main.ts */"zUnb");


/***/ }),

/***/ "1UoJ":
/*!****************************************!*\
  !*** ./src/app/HttpAuthInterceptor.ts ***!
  \****************************************/
/*! exports provided: HttpRequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestInterceptor", function() { return HttpRequestInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth/auth.service */ "9ans");



/** Inject With Credentials into the request */
var HttpRequestInterceptor = /** @class */ (function () {
    function HttpRequestInterceptor(authService) {
        var _this = this;
        this.authService = authService;
        this.isSignedIn = false;
        this.authService.isSignedIn$.subscribe(function (isSignedIn) { return (_this.isSignedIn = isSignedIn); });
    }
    HttpRequestInterceptor.prototype.intercept = function (req, next) {
        if (this.isSignedIn) {
            var req2 = req.clone({
                withCredentials: true,
                setHeaders: {
                    'Set-Cookie': req.headers.get('Cookie') + this.authService.getCookieHeader(),
                },
            });
            return next.handle(req2);
        }
        return next.handle(req);
    };
    HttpRequestInterceptor.ɵfac = function HttpRequestInterceptor_Factory(t) { return new (t || HttpRequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
    HttpRequestInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpRequestInterceptor, factory: HttpRequestInterceptor.ɵfac });
    return HttpRequestInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpRequestInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _app_services_status_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/status/status.service */ "g7VG");
/* harmony import */ var _app_services_project_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/project/project.service */ "xniV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function HeaderComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteProject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.vm.url);
} }
function HeaderComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.vm.selectedProject.key);
} }
function HeaderComponent_small_8_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_small_8_Template_small_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.toggleStatuses(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log in to use the app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, statusService, projectService) {
        this.authService = authService;
        this.statusService = statusService;
        this.projectService = projectService;
    }
    HeaderComponent.prototype.ngOnChanges = function () {
        this.selectedStatuses = this.vm.statuses.reduce(function (arr, cur) {
            if (cur.isSelected) {
                arr.push(cur.name);
            }
            return arr;
        }, []);
    };
    HeaderComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    HeaderComponent.prototype.toggleStatuses = function () {
        this.statusService.toggleStatusShown();
    };
    HeaderComponent.prototype.deleteProject = function () {
        this.projectService.deleteProject().subscribe();
    };
    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_status_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_project_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"])); };
    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { vm: "vm" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 4, consts: [[1, "bg-primary", "text-white", "mb-2"], [1, "d-flex", "justify-content-between", "mx-3"], [1, "ms-auto", "d-flex"], [1, "my-auto"], ["class", "my-auto", 3, "click", 4, "ngIf", "ngIfElse"], ["class", "my-auto", 4, "ngIf"], ["class", "ms-2 badge bg-secondary", "tabindex", "0", 3, "click", 4, "ngIf"], ["signIn", ""], [1, "my-auto", 3, "click"], ["tabindex", "0", 1, "ms-2", "badge", "bg-secondary", 3, "click"], [1, "icon-down-open"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "JSA");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_span_6_Template, 2, 1, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_span_7_Template, 2, 1, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_small_8_Template, 3, 0, "small", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_ng_template_9_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vm.url)("ngIfElse", _r3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vm.selectedProject);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedStatuses.length > 0);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".badge[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.badge[_ngcontent-%COMP%]:active {\n  background-color: #52626f !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUFBO0VBQ0ksb0NBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWRnZVxyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbi5iYWRnZTphY3RpdmVcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MjYyNmYgIWltcG9ydGFudCJdfQ== */"] });
    return HeaderComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.sass'],
            }]
    }], function () { return [{ type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _app_services_status_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"] }, { type: _app_services_project_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] }]; }, { vm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "9YHx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage/storage.service */ "E2f4");






var AuthService = /** @class */ (function () {
    function AuthService(httpClient, storageService) {
        this.httpClient = httpClient;
        this.storageService = storageService;
        this.url$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.sessionValue$$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.isSignedIn$ = this.signInOnStart().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMapTo"])(this.sessionValue$$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return !!x; }));
        this.url$ = this.url$$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (x) { return !!x; }));
        this.urlKey = '0b49dde5-f271-49ae-9bc3-f6454210d1e5';
        this.authUrl$ = this.url$$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (x) { return !!x; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return x + 'rest/auth/1/session'; }));
    }
    AuthService.prototype.checkAuthStatus = function () {
        var _this = this;
        return this.authUrl$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (x) {
            if (!x)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            return _this.httpClient.get(x);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return !!x['session']; }));
    };
    AuthService.prototype.getJiraCredentials = function (url) {
        var _this = this;
        if (!url) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
        return this.storageService
            .getCookie$({
            name: 'JSESSIONID',
            url: url,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) {
            if (x) {
                _this.url$$.next(url);
                _this.sessionValue$$.next(x.value);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
            var _a;
            return _this.storageService.setStorage$((_a = {}, _a[_this.urlKey] = url, _a));
        }));
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        return this.authUrl$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (x) { return _this.httpClient.delete(x); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            _this.sessionValue$$.next(null);
        }));
    };
    AuthService.prototype.getCookieHeader = function () {
        return this.sessionValue$$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (x) { return !!x; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return "JSESSIONID=" + x; }));
    };
    AuthService.prototype.signInOnStart = function () {
        var _this = this;
        return this.storageService.getStorage$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (x) {
            var url = x[_this.urlKey];
            if (!url)
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            return _this.getJiraCredentials(url);
        }));
    };
    AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"])); };
    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
    return AuthService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "E2f4":
/*!*****************************************************!*\
  !*** ./src/app/services/storage/storage.service.ts ***!
  \*****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "41Ph");



// @ts-ignore
var browser = chrome;
var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.getStorage$ = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(new Promise(function (resolve) { return browser.storage.local.get(function (storage) { return resolve(storage); }); }));
    };
    StorageService.prototype.getCookie$ = function (details) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(new Promise(function (resolve) {
            return browser.cookies.get(details, function (cookie) { return resolve(cookie); });
        }));
    };
    StorageService.prototype.setStorage$ = function (items) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(new Promise(function (resolve) { return browser.storage.local.set(items, function () { return resolve(); }); }));
    };
    StorageService.prototype.deleteStorage$ = function (keys) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(new Promise(function (resolve) { return browser.storage.local.remove(keys, function () { return resolve(); }); }));
    };
    StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
    StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
    return StorageService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "OnI1":
/*!***********************************************************!*\
  !*** ./src/app/components/log-work/log-work.component.ts ***!
  \***********************************************************/
/*! exports provided: LogWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogWorkComponent", function() { return LogWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var LogWorkComponent = /** @class */ (function () {
    function LogWorkComponent() {
    }
    LogWorkComponent.prototype.ngOnInit = function () {
    };
    LogWorkComponent.ɵfac = function LogWorkComponent_Factory(t) { return new (t || LogWorkComponent)(); };
    LogWorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogWorkComponent, selectors: [["app-log-work"]], decls: 2, vars: 0, template: function LogWorkComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "log-work works!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nLXdvcmsvbG9nLXdvcmsuY29tcG9uZW50LnNhc3MifQ== */"] });
    return LogWorkComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogWorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-log-work',
                templateUrl: './log-work.component.html',
                styleUrls: ['./log-work.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "9YHx");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth/auth.service */ "9ans");
/* harmony import */ var _services_project_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/project/project.service */ "xniV");
/* harmony import */ var _services_status_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/status/status.service */ "g7VG");
/* harmony import */ var _services_issue_issue_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/issue/issue.service */ "ciPP");









function AppComponent_div_0_app_pending_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-pending");
} }
function AppComponent_div_0_app_login_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-login");
} }
function AppComponent_div_0_app_project_selection_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-project-selection", 1);
} if (rf & 2) {
    var vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vm", vm_r1);
} }
function AppComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-statuses", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-status", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var vm_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vm", vm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vm", vm_r1);
} }
function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_div_0_app_pending_3_Template, 1, 0, "app-pending", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AppComponent_div_0_app_login_4_Template, 1, 0, "app-login", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_div_0_app_project_selection_5_Template, 1, 1, "app-project-selection", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_div_0_div_6_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var vm_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vm", vm_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", vm_r1.flowState);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "issues");
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(authService, projectService, statusService, issueService) {
        this.authService = authService;
        this.projectService = projectService;
        this.statusService = statusService;
        this.issueService = issueService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vm$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
            this.authService.isSignedIn$,
            this.projectService.availableProjects$,
            this.projectService.project$,
            this.authService.url$,
            this.statusService.statuses$,
            this.statusService.statusesHidden$,
            this.issueService.issues$,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 7), isSignedIn = _b[0], projects = _b[1], selectedProject = _b[2], url = _b[3], statuses = _b[4], statusesHidden = _b[5], issues = _b[6];
            var vm = {
                isSignedIn: isSignedIn,
                projects: projects,
                selectedProject: selectedProject,
                url: url,
                statuses: statuses,
                statusesHidden: statusesHidden,
                issues: issues,
            };
            vm.flowState = _this.getFlowState(vm);
            return vm;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
            isSignedIn: false,
            flowState: FlowState.Loading,
            projects: [],
            selectedProject: null,
            statuses: [],
            statusesHidden: false,
            url: null,
            issues: [],
        }));
    };
    AppComponent.prototype.getFlowState = function (vm) {
        if (!vm.isSignedIn) {
            return FlowState.Login;
        }
        if (!vm.selectedProject) {
            return FlowState.Project;
        }
        return FlowState.Issues;
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_project_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_status_status_service__WEBPACK_IMPORTED_MODULE_6__["StatusService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_issue_issue_service__WEBPACK_IMPORTED_MODULE_7__["IssueService"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [3, "vm"], [1, "mx-3", 3, "ngSwitch"], [4, "ngSwitchCase"], [3, "vm", 4, "ngSwitchCase"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AppComponent_div_0_Template, 7, 6, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.vm$));
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass'],
            }]
    }], function () { return [{ type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _services_project_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"] }, { type: _services_status_status_service__WEBPACK_IMPORTED_MODULE_6__["StatusService"] }, { type: _services_issue_issue_service__WEBPACK_IMPORTED_MODULE_7__["IssueService"] }]; }, null); })();
var FlowState;
(function (FlowState) {
    FlowState["Login"] = "login";
    FlowState["Project"] = "project";
    FlowState["Issues"] = "issues";
    FlowState["Loading"] = "loading";
})(FlowState || (FlowState = {}));


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "9YHx");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







var _c0 = function (a0) { return { "is-invalid": a0 }; };
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    Object.defineProperty(LoginComponent.prototype, "urlControl", {
        get: function () {
            return this.loginForm.get('url');
        },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var url = this.urlControl.value;
        this.authService.getJiraCredentials(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe();
    };
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 7, vars: 4, consts: [[1, "my-2"], [1, "form-group", 3, "formGroup", "ngSubmit"], [1, "d-flex", "justify-content-left"], ["name", "jiraUrl", "type", "url", "placeholder", "https://jira.example.com", "formControlName", "url", "autocomplete", "url", "required", "", 1, "form-control", "mb-3", "me-2", 3, "ngClass"], [1, "btn", "btn-primary", "mb-3"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter your Jira server website");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.urlControl.touched && ctx.urlControl.invalid));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".btn[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQUE7RUFDSSxnQkFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5cclxuICAgIG1pbi13aWR0aDogMTUwcHhcclxuLmZvcm0tY29udHJvbFxyXG4gICAgbWluLXdpZHRoOiAzMDBweCJdfQ== */"] });
    return LoginComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.sass'],
            }]
    }], function () { return [{ type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "XjLr":
/*!*****************************************************************************!*\
  !*** ./src/app/components/project-selection/project-selection.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProjectSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSelectionComponent", function() { return ProjectSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_project_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project/project.service */ "xniV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ProjectSelectionComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", project_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", project_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", project_r1.name, " / ", project_r1.key, "");
} }
var ProjectSelectionComponent = /** @class */ (function () {
    function ProjectSelectionComponent(projectService) {
        this.projectService = projectService;
        this.trackByProjectId = function (idx, item) {
            return item.id;
        };
    }
    Object.defineProperty(ProjectSelectionComponent.prototype, "projectControl", {
        get: function () {
            return this.projectForm.get('projectControl');
        },
        enumerable: false,
        configurable: true
    });
    ProjectSelectionComponent.prototype.ngOnInit = function () {
        this.projectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            projectControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    };
    ProjectSelectionComponent.prototype.submit = function () {
        this.projectService.setProject(this.projectControl.value);
    };
    ProjectSelectionComponent.ɵfac = function ProjectSelectionComponent_Factory(t) { return new (t || ProjectSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"])); };
    ProjectSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectSelectionComponent, selectors: [["app-project-selection"]], inputs: { vm: "vm" }, decls: 6, vars: 3, consts: [[3, "formGroup", "submit"], ["class", "form-check mb-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "btn", "btn-primary", "mb-3"], [1, "form-check", "mb-2"], ["formControlName", "projectControl", "type", "radio", 1, "form-check-input", 3, "value"], [1, "form-check-label", 3, "for"]], template: function ProjectSelectionComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ProjectSelectionComponent_Template_form_submit_0_listener() { return ctx.submit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select a project to work in");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectSelectionComponent_div_3_Template, 4, 4, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.projectForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vm.projects)("ngForTrackBy", ctx.trackByProjectId);
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC1zZWxlY3Rpb24vcHJvamVjdC1zZWxlY3Rpb24uY29tcG9uZW50LnNhc3MifQ== */"] });
    return ProjectSelectionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-selection',
                templateUrl: './project-selection.component.html',
                styleUrls: ['./project-selection.component.sass'],
            }]
    }], function () { return [{ type: src_app_services_project_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }]; }, { vm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_project_selection_project_selection_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/project-selection/project-selection.component */ "XjLr");
/* harmony import */ var _HttpAuthInterceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HttpAuthInterceptor */ "1UoJ");
/* harmony import */ var _components_statuses_statuses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/statuses/statuses.component */ "dPKp");
/* harmony import */ var _components_pending_pending_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pending/pending.component */ "mWAo");
/* harmony import */ var _components_issue_issue_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/issue/issue.component */ "+nnI");
/* harmony import */ var _components_status_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/status/status.component */ "gGqD");
/* harmony import */ var _components_log_work_log_work_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/log-work/log-work.component */ "OnI1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _HttpAuthInterceptor__WEBPACK_IMPORTED_MODULE_8__["HttpRequestInterceptor"], multi: true }], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        _components_project_selection_project_selection_component__WEBPACK_IMPORTED_MODULE_7__["ProjectSelectionComponent"],
        _components_statuses_statuses_component__WEBPACK_IMPORTED_MODULE_9__["StatusesComponent"],
        _components_pending_pending_component__WEBPACK_IMPORTED_MODULE_10__["PendingComponent"],
        _components_issue_issue_component__WEBPACK_IMPORTED_MODULE_11__["IssueComponent"],
        _components_status_status_component__WEBPACK_IMPORTED_MODULE_12__["StatusComponent"],
        _components_log_work_log_work_component__WEBPACK_IMPORTED_MODULE_13__["LogWorkComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                    _components_project_selection_project_selection_component__WEBPACK_IMPORTED_MODULE_7__["ProjectSelectionComponent"],
                    _components_statuses_statuses_component__WEBPACK_IMPORTED_MODULE_9__["StatusesComponent"],
                    _components_pending_pending_component__WEBPACK_IMPORTED_MODULE_10__["PendingComponent"],
                    _components_issue_issue_component__WEBPACK_IMPORTED_MODULE_11__["IssueComponent"],
                    _components_status_status_component__WEBPACK_IMPORTED_MODULE_12__["StatusComponent"],
                    _components_log_work_log_work_component__WEBPACK_IMPORTED_MODULE_13__["LogWorkComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
                providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _HttpAuthInterceptor__WEBPACK_IMPORTED_MODULE_8__["HttpRequestInterceptor"], multi: true }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgPluralCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormArrayName"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
    _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
    _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
    _components_project_selection_project_selection_component__WEBPACK_IMPORTED_MODULE_7__["ProjectSelectionComponent"],
    _components_statuses_statuses_component__WEBPACK_IMPORTED_MODULE_9__["StatusesComponent"],
    _components_pending_pending_component__WEBPACK_IMPORTED_MODULE_10__["PendingComponent"],
    _components_issue_issue_component__WEBPACK_IMPORTED_MODULE_11__["IssueComponent"],
    _components_status_status_component__WEBPACK_IMPORTED_MODULE_12__["StatusComponent"],
    _components_log_work_log_work_component__WEBPACK_IMPORTED_MODULE_13__["LogWorkComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["KeyValuePipe"]]);


/***/ }),

/***/ "ciPP":
/*!*************************************************!*\
  !*** ./src/app/services/issue/issue.service.ts ***!
  \*************************************************/
/*! exports provided: IssueService, Fields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueService", function() { return IssueService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fields", function() { return Fields; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "9YHx");
/* harmony import */ var _project_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project/project.service */ "xniV");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "9ans");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../storage/storage.service */ "E2f4");
/* harmony import */ var _status_status_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../status/status.service */ "g7VG");











var IssueService = /** @class */ (function () {
    function IssueService(projectService, authService, http, storageService, statusService) {
        var _this = this;
        this.projectService = projectService;
        this.authService = authService;
        this.http = http;
        this.storageService = storageService;
        this.statusService = statusService;
        this.refreshIssues$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.defaultFields = [Fields.Priority, Fields.Assignee, Fields.Summary];
        this.fieldsKey = '170227b0-01d8-4633-94d2-cb991d021393';
        this.url$ = this.authService.url$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x + 'rest/api/2/search'; }));
        this.issueUrl$ = this.authService.url$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x + 'rest/api/2/issue/'; }));
        this.fields$ = this.getFields();
        this.issues$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
            this.statusService.selectedStatuses$,
            this.projectService.project$,
            this.fields$,
            this.url$,
            this.refreshIssues$,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var e_1, _b;
            var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 4), statuses = _c[0], project = _c[1], fields = _c[2], url = _c[3];
            var issues = [];
            var _loop_1 = function (status_1) {
                var res = _this.http
                    .post(url, {
                    startAt: 0,
                    maxResults: 20,
                    fields: fields,
                    jql: "project = \"" + project.name + "\" AND status = \"" + status_1 + "\" order by lastViewed DESC",
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, res), { status: status_1 })); }));
                issues.push(res);
            };
            try {
                for (var statuses_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(statuses), statuses_1_1 = statuses_1.next(); !statuses_1_1.done; statuses_1_1 = statuses_1.next()) {
                    var status_1 = statuses_1_1.value;
                    _loop_1(status_1);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (statuses_1_1 && !statuses_1_1.done && (_b = statuses_1.return)) _b.call(statuses_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(issues);
        }));
    }
    IssueService.prototype.getFields = function () {
        var _this = this;
        return this.storageService.getStorage$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) {
            var _a;
            return (_a = x[_this.fieldsKey]) !== null && _a !== void 0 ? _a : _this.defaultFields;
        }));
    };
    IssueService.prototype.getTransitions = function (issue) {
        var _this = this;
        return this.issueUrl$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (url) { return _this.http.get(url + issue.id + '/transitions'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x.transitions; }));
    };
    IssueService.prototype.transition = function (transition, issueId) {
        var _this = this;
        var request = {
            transition: {
                id: transition.id,
            },
            fields: transition.to.name === 'Closed' || transition.to.name === 'Done'
                ? {
                    resolution: { name: transition.to.statusCategory.name },
                }
                : null,
        };
        return this.issueUrl$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (url) {
            return _this.http.post(url + issueId + '/transitions', request);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () { return _this.refreshIssues$.next(null); }));
    };
    IssueService.ɵfac = function IssueService_Factory(t) { return new (t || IssueService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_project_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_status_status_service__WEBPACK_IMPORTED_MODULE_8__["StatusService"])); };
    IssueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: IssueService, factory: IssueService.ɵfac, providedIn: 'root' });
    return IssueService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IssueService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _project_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] }, { type: _status_status_service__WEBPACK_IMPORTED_MODULE_8__["StatusService"] }]; }, null); })();
var Fields;
(function (Fields) {
    Fields["Assignee"] = "assignee";
    Fields["Type"] = "type";
    Fields["Epic"] = "EpicLink";
    Fields["Labels"] = "labels";
    Fields["Components"] = "components";
    Fields["Priority"] = "priority";
    Fields["TShirtSize"] = "t-Shirt size";
    Fields["Comments"] = "comments";
    Fields["DaysInProgress"] = "days in progress";
    Fields["AppDevStartTime"] = "appdevstarttime";
    Fields["AppQAStartTime"] = "appqastarttime";
    Fields["CapitalizationProjectName"] = "capitalization project name";
    Fields["CapitalizationDetermination"] = "capitalization determination";
    Fields["EpicName"] = "epic name";
    Fields["ExpectedImpact"] = "expected impact";
    Fields["LeadTimeStart"] = "lead time - start";
    Fields["LeadTimeEnd"] = "lead time - end";
    Fields["PairAsssignee"] = "pair asssignee";
    Fields["PairAssignee"] = "pair assignee";
    Fields["QaAssignee"] = "qa assignee";
    Fields["Sprint"] = "sprint";
    Fields["StarWarsSize"] = "starwars size";
    Fields["StoryPoints"] = "story points";
    Fields["SwarmEconomyWorkSource"] = "swarm economy work source";
    Fields["SwarmEconomyWorkType"] = "swarm economy work type";
    Fields["TimeSpent"] = "time spent";
    Fields["WebsiteReleaseType"] = "website release type";
    Fields["WorkObjectives"] = "work objectives";
    Fields["Summary"] = "summary";
})(Fields || (Fields = {}));


/***/ }),

/***/ "dPKp":
/*!***********************************************************!*\
  !*** ./src/app/components/statuses/statuses.component.ts ***!
  \***********************************************************/
/*! exports provided: StatusesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusesComponent", function() { return StatusesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "9YHx");
/* harmony import */ var _app_services_status_status_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/status/status.service */ "g7VG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function StatusesComponent_form_0_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var x_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", x_r2.control)("name", x_r2.status.name)("value", x_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", x_r2.status.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](x_r2.status.name);
} }
function StatusesComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StatusesComponent_form_0_span_1_Template, 4, 5, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.statusForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.statusControls);
} }
var StatusesComponent = /** @class */ (function () {
    function StatusesComponent(statusService) {
        this.statusService = statusService;
        this.trackById = function (idx, item) {
            return item.id;
        };
    }
    StatusesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statusControls = this.vm.statuses.map(function (x) { return ({
            status: x,
            control: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](x.isSelected),
        }); });
        this.statusForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            statusControls: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"](this.statusControls.map(function (x) { return x.control; })),
        });
        this.changesSubscription = this.statusForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () { return _this.setSelectedStatuses(); }))
            .subscribe();
    };
    StatusesComponent.prototype.ngOnDestroy = function () {
        this.changesSubscription.unsubscribe();
    };
    StatusesComponent.prototype.setSelectedStatuses = function () {
        var selected = this.statusControls
            .filter(function (x) { return !!x.control.value; })
            .map(function (x) { return x.status.name; });
        return this.statusService.setSelectedStatuses(selected);
    };
    StatusesComponent.ɵfac = function StatusesComponent_Factory(t) { return new (t || StatusesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_status_status_service__WEBPACK_IMPORTED_MODULE_3__["StatusService"])); };
    StatusesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatusesComponent, selectors: [["app-statuses"]], inputs: { vm: "vm" }, decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["class", "me-2 mb-2 badge bg-light text-dark", 4, "ngFor", "ngForTrackById", "ngForOf"], [1, "me-2", "mb-2", "badge", "bg-light", "text-dark"], ["type", "checkbox", 1, "me-1", 3, "formControl", "name", "value"], [3, "for"]], template: function StatusesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StatusesComponent_form_0_Template, 2, 2, "form", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.vm.statusesHidden);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], styles: [".icon-open-down[_ngcontent-%COMP%] {\n  right: 15px;\n  top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGF0dXNlcy9zdGF0dXNlcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0YXR1c2VzL3N0YXR1c2VzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tb3Blbi1kb3duXHJcbiAgICByaWdodDogMTVweFxyXG4gICAgdG9wOiAxNXB4Il19 */"] });
    return StatusesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-statuses',
                templateUrl: './statuses.component.html',
                styleUrls: ['./statuses.component.sass'],
            }]
    }], function () { return [{ type: _app_services_status_status_service__WEBPACK_IMPORTED_MODULE_3__["StatusService"] }]; }, { vm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "g7VG":
/*!***************************************************!*\
  !*** ./src/app/services/status/status.service.ts ***!
  \***************************************************/
/*! exports provided: StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var lodash_es_flatten__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash-es/flatten */ "xWuZ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "9YHx");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage/storage.service */ "E2f4");
/* harmony import */ var _project_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../project/project.service */ "xniV");








var StatusService = /** @class */ (function () {
    function StatusService(storageService, projectService) {
        var _this = this;
        this.storageService = storageService;
        this.projectService = projectService;
        this.statusesKey = '3dbefd70-db09-4d89-b815-c8153bc6f32a';
        this.selectedStatusesKey = 'cc67988d-57a3-4db8-b6fd-1aab3cffdb56';
        this.selectedStatuses$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.statusesHidden$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.statusesHidden$ = this.statusesHidden$$.asObservable();
        this.selectedStatuses$ = this.getSelectedStatuses().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (x) {
            _this.selectedStatuses$$.next(x);
            if ((x === null || x === void 0 ? void 0 : x.length) > 0) {
                _this.statusesHidden$$.next(true);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMapTo"])(this.selectedStatuses$$));
        this.statuses$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
            this.projectService.issueTypes$,
            this.selectedStatuses$,
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var e_1, _b;
            var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), x = _c[0], selected = _c[1];
            var statusesDeep = x.map(function (issueType) { return issueType.statuses; });
            var statusList = Object(lodash_es_flatten__WEBPACK_IMPORTED_MODULE_2__["default"])(statusesDeep);
            var statusDict = {};
            try {
                for (var statusList_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(statusList), statusList_1_1 = statusList_1.next(); !statusList_1_1.done; statusList_1_1 = statusList_1.next()) {
                    var status_1 = statusList_1_1.value;
                    if (!!statusDict[status_1.name])
                        continue;
                    status_1.isSelected = selected.includes(status_1.name);
                    statusDict[status_1.name] = status_1;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (statusList_1_1 && !statusList_1_1.done && (_b = statusList_1.return)) _b.call(statusList_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return Object.values(statusDict);
        }));
    }
    StatusService.prototype.getSelectedStatuses = function () {
        var _this = this;
        return this.storageService
            .getStorage$()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (x) { var _a; return (_a = x[_this.selectedStatusesKey]) !== null && _a !== void 0 ? _a : []; }));
    };
    StatusService.prototype.setStatuses = function (statuses) {
        var _a;
        this.storageService.setStorage$((_a = {}, _a[this.statusesKey] = statuses, _a));
    };
    StatusService.prototype.setSelectedStatuses = function (names) {
        var _a;
        this.selectedStatuses$$.next(names);
        return this.storageService.setStorage$((_a = {}, _a[this.selectedStatusesKey] = names, _a));
    };
    StatusService.prototype.toggleStatusShown = function () {
        this.statusesHidden$$.next(!this.statusesHidden$$.value);
    };
    StatusService.prototype.getUniqueStatuses = function (issueTypes) {
        var e_2, _a, e_3, _b;
        var types = {};
        var statuses = {};
        try {
            for (var issueTypes_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(issueTypes), issueTypes_1_1 = issueTypes_1.next(); !issueTypes_1_1.done; issueTypes_1_1 = issueTypes_1.next()) {
                var issueType = issueTypes_1_1.value;
                if (types[issueType.name])
                    continue;
                var type = {
                    name: issueType.name,
                    id: issueType.id,
                };
                types[issueType.name](type);
                try {
                    for (var _c = (e_3 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(issueType.statuses)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var status_2 = _d.value;
                        if (statuses[status_2.name])
                            continue;
                        statuses[status_2.name] = status_2;
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (issueTypes_1_1 && !issueTypes_1_1.done && (_a = issueTypes_1.return)) _a.call(issueTypes_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return { statuses: statuses, types: types };
    };
    StatusService.ɵfac = function StatusService_Factory(t) { return new (t || StatusService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_project_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"])); };
    StatusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StatusService, factory: StatusService.ɵfac, providedIn: 'root' });
    return StatusService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StatusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }, { type: _project_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "gGqD":
/*!*******************************************************!*\
  !*** ./src/app/components/status/status.component.ts ***!
  \*******************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _issue_issue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../issue/issue.component */ "+nnI");




function StatusComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var col_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](col_r2.status);
} }
function StatusComponent_div_3_app_issue_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-issue", 4);
} if (rf & 2) {
    var issue_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("issue", issue_r5);
} }
function StatusComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StatusComponent_div_3_app_issue_1_Template, 1, 1, "app-issue", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var col_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", col_r3.issues);
} }
var StatusComponent = /** @class */ (function () {
    function StatusComponent() {
    }
    StatusComponent.ɵfac = function StatusComponent_Factory(t) { return new (t || StatusComponent)(); };
    StatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatusComponent, selectors: [["app-status"]], inputs: { vm: "vm" }, decls: 4, vars: 2, consts: [[1, "row"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [3, "issue", 4, "ngFor", "ngForOf"], [3, "issue"]], template: function StatusComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StatusComponent_div_1_Template, 3, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StatusComponent_div_3_Template, 2, 1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vm.issues);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vm.issues);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _issue_issue_component__WEBPACK_IMPORTED_MODULE_2__["IssueComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQuc2FzcyJ9 */"] });
    return StatusComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-status',
                templateUrl: './status.component.html',
                styleUrls: ['./status.component.sass'],
            }]
    }], function () { return []; }, { vm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "mWAo":
/*!*********************************************************!*\
  !*** ./src/app/components/pending/pending.component.ts ***!
  \*********************************************************/
/*! exports provided: PendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingComponent", function() { return PendingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var PendingComponent = /** @class */ (function () {
    function PendingComponent() {
    }
    PendingComponent.prototype.ngOnInit = function () {
    };
    PendingComponent.ɵfac = function PendingComponent_Factory(t) { return new (t || PendingComponent)(); };
    PendingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PendingComponent, selectors: [["app-pending"]], decls: 2, vars: 0, consts: [[1, "d-flex", "justify-content-center"], ["src", "https://acegif.com/wp-content/gif/dog-chasing-tail-19.gif", "alt", "loading"]], template: function PendingComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVuZGluZy9wZW5kaW5nLmNvbXBvbmVudC5zYXNzIn0= */"] });
    return PendingComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PendingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pending',
                templateUrl: './pending.component.html',
                styleUrls: ['./pending.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xniV":
/*!*****************************************************!*\
  !*** ./src/app/services/project/project.service.ts ***!
  \*****************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "9YHx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "9ans");
/* harmony import */ var _storage_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../storage/storage.service */ "E2f4");









var ProjectService = /** @class */ (function () {
    function ProjectService(http, auth, storageService) {
        var _this = this;
        this.http = http;
        this.auth = auth;
        this.storageService = storageService;
        this.projectUrl$ = this.auth.url$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x + 'rest/api/2/project'; }));
        this.projectBS = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.projectCookieKey = '6cbbfa32-e2f1-4694-861e-1edf3c9a1a2b';
        this.project$ = this.projectBS.asObservable();
        this.availableProjects$ = this.projectUrl$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (x) { return _this.http.get(x + '?recent=5'); }));
        this.issueTypes$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([this.project$, this.projectUrl$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), project = _b[0], url = _b[1];
            return !!(project === null || project === void 0 ? void 0 : project.key) && !!url;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), project = _b[0], url = _b[1];
            return _this.http.get(url + "/" + project.key + "/statuses");
        }));
        var jsonProject = this.storageService
            .getStorage$()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function (storage) {
            var x = storage[_this.projectCookieKey];
            if (x) {
                _this.projectBS.next(JSON.parse(x));
            }
        });
    }
    ProjectService.prototype.setProject = function (project) {
        var _a;
        this.projectBS.next(project);
        return this.storageService.setStorage$((_a = {},
            _a[this.projectCookieKey] = JSON.stringify(project),
            _a));
    };
    ProjectService.prototype.deleteProject = function () {
        this.projectBS.next(null);
        return this.storageService.deleteStorage$([this.projectCookieKey]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    };
    ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"])); };
    ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });
    return ProjectService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _storage_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map