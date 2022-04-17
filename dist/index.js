"use strict";
// ----------- 基本類型 -----------
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
// -------------- interface ------------------
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLCtCQUErQjtBQUUvQixJQUFJLEdBQUcsR0FBVyxPQUFPLENBQUE7QUFDekIsSUFBSSxJQUFZLENBQUM7QUFDakIsSUFBSSxHQUFHLEtBQUssQ0FBQTtBQUVaLElBQUksR0FBRyxHQUFXLElBQUksQ0FBQTtBQUN0QixJQUFJLEdBQUcsR0FBWSxJQUFJLENBQUE7QUFFdkIsS0FBSztBQUNMLElBQUksR0FBRyxHQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQzlCLElBQUksSUFBSSxHQUFlLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUVuQyxLQUFLO0FBQ0wsSUFBSSxLQUFLLEdBQThCLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUNyRCxJQUFJLE1BQU0sR0FBdUIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBRTdDLDRDQUE0QztBQUU1QyxtQkFBbUI7QUFDbkIsWUFBWTtBQUNaLFNBQVM7QUFFVCxJQUFLLFVBSUo7QUFKRCxXQUFLLFVBQVU7SUFDWixpREFBVyxDQUFBO0lBQ1gsNENBQVMsQ0FBQTtJQUNULDJEQUFnQixDQUFBO0FBQ25CLENBQUMsRUFKSSxVQUFVLEtBQVYsVUFBVSxRQUlkO0FBRUQsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQTtBQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBRXRCLDBDQUEwQztBQUUxQyxJQUFJLEdBQW9CLENBQUE7QUFDeEIsR0FBRyxHQUFHLElBQUksQ0FBQTtBQUNWLEdBQUcsR0FBRyxLQUFLLENBQUE7QUFJWCxJQUFJLEVBQUssQ0FBQTtBQUNULEVBQUUsR0FBRyxHQUFHLENBQUE7QUFDUixFQUFFLEdBQUcsS0FBSyxDQUFBO0FBRVYsOENBQThDIn0=