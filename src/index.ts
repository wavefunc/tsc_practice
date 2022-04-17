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
// interface 跟 type 的差別： interface 可擴充、還可以在 class 實作

interface User {
   name: string;
   age: number;
}

// -------------- object ------------------

interface Card2 {
   name: string
   desc: string
}

interface Card2 {
   age?: number   // 加一個? 表示繼承的物件不加 age 這個屬性也不會報錯
}

const obj: Card2 = {
   name: 'bruce',
   desc: '...'
}

// -------------- function ------------------
// 參數
function hello(a: string, b: string) {
   return a + b
}

// undefined
function hello2(a: number) {
   console.log(a);
}

function hello4(name: string, age?: number) {
   if (age === undefined) return -1
   hello2(age)
   return
}

// 箭頭函式

const func = () => {
   let a = 1
   if (a === 1)
      return 3
   else
      return 5
}

// -------------- 斷言 unknown ------------------

type Data = {
   userId: number,
   id: number,
   title: string,
   completed: boolean
}

async function getData() {
   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   const data = await res.json() as Data
}

const data1: Data = {
   "userId": 1,
   "id": 1,
   "title": "delectus aut autem",
   "completed": false
}

type Beta = {
   name: string
}

// 假設 data1 是動態的
const beta = data1 as unknown as Beta

// -------------- class ------------------

// private 私有
// public 公開
// protected 受保護

class Live {
   roomName: string // public
   private id: string
   protected name: string

   constructor(_roomName: string, _id: string, _name: string) {
      console.log("建立直播中...")
      this.roomName = _roomName
      this.id = _id
      this.name = _name
   }
}

class CarLive extends Live {
   constructor(_roomName: string, _id: string, _name: string) {
      super(_roomName, _id, _name)
   }

   start() {
      super.name
      // super.id -> private 無法在 繼承的類別 or 在外面 訪問
   }
}

// 外面
const live = new Live('1號', '000001', 'Edward')
const carLive = new CarLive('car room', '000002', 'Edward2')
// carLive.name -> protected 無法在外面訪問

class Live2 {
   // 私有變數
   #name
   constructor(name: string) {
      this.#name = name
   }
}

const live2 = new Live2('live2')
console.log(live2)

// interface 的實作
interface CarProps {
   name: string
   age: number
   start: () => void
}

class Car implements CarProps {
   name: string
   age: number

   constructor(name: string, age: number) {
      this.name = name
      this.age = age
   }

   start() { }
}

// -------------- 泛型 ------------------

function print<T>(data: T) {
   console.log('data: ', data)
}

print<number>(999)
print<string>("Edward")

class Print<T>{
   data: T
   constructor(data: T) {
      this.data = data
   }
}

const p1 = new Print<number>(999)
const p2 = new Print<string>('Edward')
console.log('p1: ', p1)
console.log('p2: ', p2)