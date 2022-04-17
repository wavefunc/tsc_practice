// ----------- 基本類型 -----------

let str: string = 'bruce'
let str1: string;
str1 = "999"

let num: number = 1000
let boo: boolean = true

// 陣列
let arr: string[] = ['a', 'b']
let arr2: string[][] = [['a', 'b']]

// 元組
let tuple: [number, string, boolean] = [1, 'b', true]
let tuple2: [string, string][] = [['a', 'b']]

// -------------- Enum 枚舉 ------------------

// 開直播api -> 獲取直播狀態
// 成功 失敗 直播中
// 0 -1 1

enum LiveStatus {
   SUCCESS = 0,
   FAIL = -1,
   BROADCASTING = 1
}

const condition = LiveStatus.SUCCESS
console.log(condition)

// -------------- Union ------------------

let aaa: number | string
aaa = 1000
aaa = "str"

// -------------- type ------------------
type A = string | number
let a1: A
a1 = 333
a1 = "str"

// -------------- interface ------------------


