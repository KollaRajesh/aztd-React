"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorites = exports.Course = exports.Musical = exports.Documentary = exports.Performer = void 0;
var decorators_1 = require("./decorators");
var Performer = /** @class */ (function () {
    function Performer() {
        this.name = "";
        this.email = "";
        this.role = "";
    }
    Performer.prototype.rehearse = function (sceneNumber) {
        console.log(this.name + " is rehearsing scene number " + sceneNumber + ".");
    };
    return Performer;
}());
exports.Performer = Performer;
var Video = /** @class */ (function () {
    function Video(title, year) {
        this.title = title;
        this.year = year;
        this._producer = '';
        console.log('Creating a new Video...');
    }
    Object.defineProperty(Video.prototype, "producer", {
        get: function () {
            return this._producer.toUpperCase();
        },
        set: function (newProducer) {
            this._producer = newProducer;
        },
        enumerable: false,
        configurable: true
    });
    Video.prototype.printItem = function () {
        console.log(this.title + " was released in " + this.year + ".");
        console.log("Medium: " + Video.medium);
    };
    Video.medium = 'Audio/Visual';
    return Video;
}());
var Documentary = /** @class */ (function (_super) {
    __extends(Documentary, _super);
    function Documentary(newTitle, newYear, subject) {
        var _this = _super.call(this, newTitle, newYear) || this;
        _this.subject = subject;
        return _this;
    }
    Documentary.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("Subject: " + this.subject + " (" + this.year + ")");
    };
    Documentary.prototype.printCredits = function () {
        console.log("Producer: " + this.producer);
    };
    __decorate([
        decorators_1.logMethodInfo
    ], Documentary.prototype, "printItem", null);
    return Documentary;
}(Video));
exports.Documentary = Documentary;
exports.Musical = /** @class */ (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_1.prototype.printCredits = function () {
        console.log("Musical credits: " + this.producer);
    };
    return class_1;
}(Video));
var Course = /** @class */ (function (_super) {
    __extends(Course, _super);
    function Course() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subject = '';
        return _this;
    }
    return Course;
}(/** @class */ (function () {
    function class_2() {
        this.title = '';
    }
    return class_2;
}())));
exports.Course = Course;
var Favorites = /** @class */ (function () {
    function Favorites() {
        this._items = new Array();
    }
    Favorites.prototype.add = function (item) {
        this._items.push(item);
    };
    Favorites.prototype.getFirst = function () {
        return this._items[0];
    };
    Favorites.prototype.find = function (title) {
        return this._items.filter(function (item) { return item.title === title; })[0];
    };
    Favorites.prototype.printTitles = function () {
        this._items.forEach(function (item) { return console.log(item.title); });
    };
    return Favorites;
}());
exports.Favorites = Favorites;
