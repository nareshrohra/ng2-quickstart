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
var posts_js_1 = require('./services/posts.js');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var AppEditPost = (function () {
    function AppEditPost(fb, postsService, route) {
        var _this = this;
        this.fb = fb;
        this.postsService = postsService;
        this.route = route;
        var postId = route.snapshot.params["id"];
        this.model = { id: 0, title: '', body: '' };
        if (postId) {
            postsService.getPost(postId).subscribe(function (post) {
                _this.model = post;
            });
        }
    }
    AppEditPost.prototype.doSave = function () {
        console.log(this.model);
        return false;
    };
    AppEditPost = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./app.editpost.html",
            providers: [posts_js_1.PostsService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, posts_js_1.PostsService, router_1.ActivatedRoute])
    ], AppEditPost);
    return AppEditPost;
}());
exports.AppEditPost = AppEditPost;
//# sourceMappingURL=app.editpost.js.map