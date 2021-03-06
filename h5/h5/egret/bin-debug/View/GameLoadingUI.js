var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
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
var ui;
(function (ui) {
    var GameLoadingUI = (function (_super) {
        __extends(GameLoadingUI, _super);
        function GameLoadingUI() {
            return _super.call(this, GameLoadingUI.CUSTOM) || this;
        }
        GameLoadingUI.prototype.onEnter = function () {
            _super.prototype.onEnter.call(this);
            this.loadRes();
        };
        GameLoadingUI.prototype.setProgress = function (current, total) {
            this.progress.minimum = current / total * 100;
        };
        GameLoadingUI.prototype.loadRes = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                var self, loading, _i, _a, v, timer;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            self = this;
                            loading = {
                                onProgress: function (current, total) {
                                    self.setProgress(current, total);
                                }
                            };
                            return [4 /*yield*/, RES.loadGroup("preload", 0, loading)];
                        case 1:
                            _b.sent();
                            _i = 0, _a = config.MAP_URLS;
                            _b.label = 2;
                        case 2:
                            if (!(_i < _a.length)) return [3 /*break*/, 5];
                            v = _a[_i];
                            return [4 /*yield*/, RES.getResAsync(v)];
                        case 3:
                            _b.sent();
                            _b.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5:
                            timer = new egret.Timer(0, 1);
                            timer.addEventListener(egret.TimerEvent.TIMER, function () { return _this.startCreateScene(); }, this);
                            timer.start();
                            return [2 /*return*/];
                    }
                });
            });
        };
        GameLoadingUI.prototype.startCreateScene = function () {
            console.log("startCreateScene");
            UIMgr.open(ui.World, "scene");
            UIMgr.open(ui.Home, "home");
            UIMgr.open(ui.Guide, "guide");
            this.removeFromParent();
        };
        return GameLoadingUI;
    }(UIBase));
    GameLoadingUI.CUSTOM = {
        skinName: "resource/ui/LoadingUISkin.exml"
    };
    ui.GameLoadingUI = GameLoadingUI;
    __reflect(GameLoadingUI.prototype, "ui.GameLoadingUI");
})(ui || (ui = {}));
//# sourceMappingURL=GameLoadingUI.js.map