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
var AppPosts = (function () {
    function AppPosts(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.postsService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
        });
    }
    AppPosts = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./app.posts.html",
            providers: [posts_js_1.PostsService]
        }), 
        __metadata('design:paramtypes', [posts_js_1.PostsService])
    ], AppPosts);
    return AppPosts;
}());
exports.AppPosts = AppPosts;
//# sourceMappingURL=app.posts.js.map