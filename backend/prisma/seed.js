"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
exports.__esModule = true;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
// モデル投入用のデータ定義
var postData = [
    {
        id: 'fa119cb6-9135-57f5-8a5a-54f28d566d0e',
        contentPath: '/storage/posts/articles/hello.md',
        emoji: '✅',
        excerpt: '本を書いています',
        md5Hash: '5ce6822c5efacf5791b7f46187451e73',
        title: '気持ちを落ち着かせる呼吸法',
        thumbNailUrl: 'http://exaample.com/image1.png',
        type: 'article',
        publishDate: new Date('2022-01-31'),
        published: true,
        like: 0,
        createdAt: new Date('2022-01-31T04:34:22+09:00'),
        updatedAt: new Date('2022-01-31T04:34:22+09:00')
    },
    {
        id: '545d5237-15ee-169c-13a2-30f8748e3d6e',
        contentPath: '/storage/posts/articles/graphql.md',
        emoji: '🛳',
        excerpt: '記事を書いています',
        md5Hash: 'b7ec2e1a2b1faaed120aeeccb1ffc587',
        title: '高ぶる気持ちを存分に発揮したいです',
        thumbNailUrl: 'http://exaample.com/image2.png',
        type: 'article',
        publishDate: new Date('2022-01-30'),
        published: true,
        like: 0,
        createdAt: new Date('2022-01-31T04:34:22+09:00'),
        updatedAt: new Date('2022-01-31T04:34:22+09:00')
    },
    {
        id: '95daa18f-90d0-390c-fb96-0d152312936c',
        contentPath: '/storage/posts/articles/nestjs.md',
        emoji: '😼',
        excerpt: '日記を書いています',
        md5Hash: 'e5f6dd3adc408b03fbac3faadb82947d',
        title: 'ゆっくり落ち着く気持ちを大事にしたいです',
        thumbNailUrl: 'http://exaample.com/image3.png',
        type: 'diary',
        publishDate: new Date('2022-01-29'),
        published: true,
        like: 0,
        createdAt: new Date('2022-01-31T04:34:22+09:00'),
        updatedAt: new Date('2022-01-31T04:34:22+09:00')
    },
];
var doSeed = function () { return __awaiter(void 0, void 0, void 0, function () {
    var posts, _i, postData_1, post, createPosts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                posts = [];
                for (_i = 0, postData_1 = postData; _i < postData_1.length; _i++) {
                    post = postData_1[_i];
                    createPosts = prisma.post.create({
                        data: post
                    });
                    posts.push(createPosts);
                }
                return [4 /*yield*/, prisma.$transaction(posts)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Start seeding ...");
                return [4 /*yield*/, doSeed()];
            case 1:
                _a.sent();
                console.log("Seeding finished.");
                return [2 /*return*/];
        }
    });
}); };
main()["catch"](function (e) {
    console.error(e);
    process.exit(1);
})["finally"](function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
