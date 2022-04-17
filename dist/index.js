"use strict";
// ----------- 基本類型 -----------
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Live2_name;
let str = 'bruce';
let str1;
str1 = "999";
let num = 1000;
let boo = true;
// 陣列
let arr = ['a', 'b'];
let arr2 = [['a', 'b']];
// 元組
let tuple = [1, 'b', true];
let tuple2 = [['a', 'b']];
// -------------- Enum 枚舉 ------------------
// 開直播api -> 獲取直播狀態
// 成功 失敗 直播中
// 0 -1 1
var LiveStatus;
(function (LiveStatus) {
    LiveStatus[LiveStatus["SUCCESS"] = 0] = "SUCCESS";
    LiveStatus[LiveStatus["FAIL"] = -1] = "FAIL";
    LiveStatus[LiveStatus["BROADCASTING"] = 1] = "BROADCASTING";
})(LiveStatus || (LiveStatus = {}));
const condition = LiveStatus.SUCCESS;
console.log(condition);
// -------------- Union ------------------
let aaa;
aaa = 1000;
aaa = "str";
let a1;
a1 = 333;
a1 = "str";
const obj = {
    name: 'bruce',
    desc: '...'
};
// -------------- function ------------------
// 參數
function hello(a, b) {
    return a + b;
}
// undefined
function hello2(a) {
    console.log(a);
}
function hello4(name, age) {
    if (age === undefined)
        return -1;
    hello2(age);
    return;
}
// 箭頭函式
const func = () => {
    let a = 1;
    if (a === 1)
        return 3;
    else
        return 5;
};
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = yield res.json();
    });
}
const data1 = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
};
// 假設 data1 是動態的
const beta = data1;
// -------------- class ------------------
// private 私有
// public 公開
// protected 受保護
class Live {
    constructor(_roomName, _id, _name) {
        console.log("建立直播中...");
        this.roomName = _roomName;
        this.id = _id;
        this.name = _name;
    }
}
class CarLive extends Live {
    constructor(_roomName, _id, _name) {
        super(_roomName, _id, _name);
    }
    start() {
        super.name;
        // super.id -> private 無法在 繼承的類別 or 在外面 訪問
    }
}
// 外面
const live = new Live('1號', '000001', 'Edward');
const carLive = new CarLive('car room', '000002', 'Edward2');
// carLive.name -> protected 無法在外面訪問
class Live2 {
    constructor(name) {
        // 私有變數
        _Live2_name.set(this, void 0);
        __classPrivateFieldSet(this, _Live2_name, name, "f");
    }
}
_Live2_name = new WeakMap();
const live2 = new Live2('live2');
console.log(live2);
class Car {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    start() { }
}
// -------------- 泛型 ------------------
function print(data) {
    console.log('data: ', data);
}
print(999);
print("Edward");
class Print {
    constructor(data) {
        this.data = data;
    }
}
const p1 = new Print(999);
const p2 = new Print('Edward');
console.log('p1: ', p1);
console.log('p2: ', p2);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtCQUErQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBSSxHQUFHLEdBQVcsT0FBTyxDQUFBO0FBQ3pCLElBQUksSUFBWSxDQUFDO0FBQ2pCLElBQUksR0FBRyxLQUFLLENBQUE7QUFFWixJQUFJLEdBQUcsR0FBVyxJQUFJLENBQUE7QUFDdEIsSUFBSSxHQUFHLEdBQVksSUFBSSxDQUFBO0FBRXZCLEtBQUs7QUFDTCxJQUFJLEdBQUcsR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUM5QixJQUFJLElBQUksR0FBZSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFFbkMsS0FBSztBQUNMLElBQUksS0FBSyxHQUE4QixDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUE7QUFDckQsSUFBSSxNQUFNLEdBQXVCLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUU3Qyw0Q0FBNEM7QUFFNUMsbUJBQW1CO0FBQ25CLFlBQVk7QUFDWixTQUFTO0FBRVQsSUFBSyxVQUlKO0FBSkQsV0FBSyxVQUFVO0lBQ1osaURBQVcsQ0FBQTtJQUNYLDRDQUFTLENBQUE7SUFDVCwyREFBZ0IsQ0FBQTtBQUNuQixDQUFDLEVBSkksVUFBVSxLQUFWLFVBQVUsUUFJZDtBQUVELE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUE7QUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUV0QiwwQ0FBMEM7QUFFMUMsSUFBSSxHQUFvQixDQUFBO0FBQ3hCLEdBQUcsR0FBRyxJQUFJLENBQUE7QUFDVixHQUFHLEdBQUcsS0FBSyxDQUFBO0FBSVgsSUFBSSxFQUFLLENBQUE7QUFDVCxFQUFFLEdBQUcsR0FBRyxDQUFBO0FBQ1IsRUFBRSxHQUFHLEtBQUssQ0FBQTtBQXFCVixNQUFNLEdBQUcsR0FBVTtJQUNoQixJQUFJLEVBQUUsT0FBTztJQUNiLElBQUksRUFBRSxLQUFLO0NBQ2IsQ0FBQTtBQUVELDZDQUE2QztBQUM3QyxLQUFLO0FBQ0wsU0FBUyxLQUFLLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ2YsQ0FBQztBQUVELFlBQVk7QUFDWixTQUFTLE1BQU0sQ0FBQyxDQUFTO0lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLElBQVksRUFBRSxHQUFZO0lBQ3ZDLElBQUksR0FBRyxLQUFLLFNBQVM7UUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ2hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNYLE9BQU07QUFDVCxDQUFDO0FBRUQsT0FBTztBQUVQLE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNULElBQUksQ0FBQyxLQUFLLENBQUM7UUFDUixPQUFPLENBQUMsQ0FBQTs7UUFFUixPQUFPLENBQUMsQ0FBQTtBQUNkLENBQUMsQ0FBQTtBQVdELFNBQWUsT0FBTzs7UUFDbkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQTtRQUN2RSxNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQVUsQ0FBQTtJQUN4QyxDQUFDO0NBQUE7QUFFRCxNQUFNLEtBQUssR0FBUztJQUNqQixRQUFRLEVBQUUsQ0FBQztJQUNYLElBQUksRUFBRSxDQUFDO0lBQ1AsT0FBTyxFQUFFLG9CQUFvQjtJQUM3QixXQUFXLEVBQUUsS0FBSztDQUNwQixDQUFBO0FBTUQsZ0JBQWdCO0FBQ2hCLE1BQU0sSUFBSSxHQUFHLEtBQXdCLENBQUE7QUFFckMsMENBQTBDO0FBRTFDLGFBQWE7QUFDYixZQUFZO0FBQ1osZ0JBQWdCO0FBRWhCLE1BQU0sSUFBSTtJQUtQLFlBQVksU0FBaUIsRUFBRSxHQUFXLEVBQUUsS0FBYTtRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFBO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztDQUNIO0FBRUQsTUFBTSxPQUFRLFNBQVEsSUFBSTtJQUN2QixZQUFZLFNBQWlCLEVBQUUsR0FBVyxFQUFFLEtBQWE7UUFDdEQsS0FBSyxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVELEtBQUs7UUFDRixLQUFLLENBQUMsSUFBSSxDQUFBO1FBQ1YsMENBQTBDO0lBQzdDLENBQUM7Q0FDSDtBQUVELEtBQUs7QUFDTCxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFBO0FBQy9DLE1BQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUE7QUFDNUQsb0NBQW9DO0FBRXBDLE1BQU0sS0FBSztJQUdSLFlBQVksSUFBWTtRQUZ4QixPQUFPO1FBQ1AsOEJBQUs7UUFFRix1QkFBQSxJQUFJLGVBQVMsSUFBSSxNQUFBLENBQUE7SUFDcEIsQ0FBQztDQUNIOztBQUVELE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7QUFTbEIsTUFBTSxHQUFHO0lBSU4sWUFBWSxJQUFZLEVBQUUsR0FBVztRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBRUQsS0FBSyxLQUFLLENBQUM7Q0FDYjtBQUVELHVDQUF1QztBQUV2QyxTQUFTLEtBQUssQ0FBSSxJQUFPO0lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO0FBQzlCLENBQUM7QUFFRCxLQUFLLENBQVMsR0FBRyxDQUFDLENBQUE7QUFDbEIsS0FBSyxDQUFTLFFBQVEsQ0FBQyxDQUFBO0FBRXZCLE1BQU0sS0FBSztJQUVSLFlBQVksSUFBTztRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtJQUNuQixDQUFDO0NBQ0g7QUFFRCxNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBUyxHQUFHLENBQUMsQ0FBQTtBQUNqQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssQ0FBUyxRQUFRLENBQUMsQ0FBQTtBQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQTtBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQSJ9