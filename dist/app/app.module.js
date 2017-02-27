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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_js_1 = require('./app.component.js');
var app_posts_js_1 = require('./app.posts.js');
var app_editpost_js_1 = require('./app.editpost.js');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var appRoutes = [{
        path: 'posts',
        component: app_posts_js_1.AppPosts
    },
    {
        path: 'edit-post',
        component: app_editpost_js_1.AppEditPost
    }, {
        path: '',
        component: app_posts_js_1.AppPosts
    }];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule,
                router_1.RouterModule.forRoot(appRoutes), forms_1.ReactiveFormsModule, forms_1.FormsModule],
            declarations: [app_posts_js_1.AppPosts, app_editpost_js_1.AppEditPost, app_component_js_1.AppComponent],
            bootstrap: [app_component_js_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map