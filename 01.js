// js id dynamic typing
// be is static typing
// static มีประสิทธิภาพมากกว่า dynamic

// declaration : ประกาศตัวแปร

var j; // old style - function-scope;repeatable หละหลวม
let k; // new style -block-scope; non-repeatable
const f=10; // constant 3 แบบต่างกัน

// assignment : กำหนดค่า
// initialization (first assignment)

// datatype : 2 type 
// primitive type : ธรรมดา พื้นฐาน มีอยู่แล้ว
// derived/abstract/user-defined type : ถูกพัฒนาขึ้นมา กำหนดขึ้นมา (object datatype)

// today focus primitive datatype
// number-bigint(จำนวนเต็ม),character(ตัวอักษร)/string(ต่อๆๆกันเป็นสาย),boolean,special type[undefined != null](represent nothing-ness),symbol:ไม่ซ้ำกับของที่สร้างแล้ว
// type : value /boolean:true false

var p; // output is undefined

//  operator : typeof ==> for typing 

// create 10 variable having Boolean,number,string,undefined ,null and console.log their values

let bl = true;
console.log('boolean : ',bl, typeof bl);
let bool = false;
console.log('boolean : ',bool, typeof bool);

let nm = 3;
console.log('number : ',nm, typeof nm);
let numb = 4.7;
console.log('number : ',numb, typeof numb);

let str = "jiajia"
console.log('string : ',str, typeof str);
let str2 = "jubjub"
console.log('string : ',str2, typeof str2);

let und;
console.log('undefined : ',und, typeof und);
var un;
console.log('undefined : ',un, typeof un);

let nu = null;
console.log('null : ',nu, typeof nu);
let nu2 = null;
console.log('null : ',nu2, typeof nu2);



// ----------------------------------------------------------------------------

var num = 10.0000;
var flt = 10.0001;
var inf = Infinity;
var nan = NaN;

console.log('num: ',num,typeof num, Number.isInteger(num),Number.isFinite(num),Number.isNaN(num)); //num:  10 number true true false
console.log('flt: ',flt,typeof flt, Number.isInteger(flt),Number.isFinite(flt),Number.isNaN(flt)); //flt:  10.0001 number false true false
console.log('inf: ',inf,typeof inf, Number.isInteger(inf),Number.isFinite(inf),Number.isNaN(inf)); //inf:  Infinity number false false false
console.log('nan: ',nan,typeof nan, Number.isInteger(nan),Number.isFinite(nan),Number.isNaN(nan)); //nan:  NaN number false false true


var exp = null; //null type
console.log(String(exp)); //explicit type conversion : null
console.log(Number(exp)); //explicit type conversion : 0
console.log(Boolean(exp)); //explicit type conversion : false


//write an expression to find 
//1. หาค่าของ  x ยกกำลัง y ทั้งหมดยกกำลัง z , x ยกกำลัง y ยกกำลัง z โดยที่ x=5 , y=3 ,z=2 โดยใช้ ** operator  และไม่ใช้วงเล็บ
let x = 5;
let y = 3;
let z = 2;
console.log((x**y)**z);
console.log(x**y**z);


//2.หาเศษจาก a หารด้วย b และค่าจากการปัดเศษจาก a หารด้วย b (c) a=30 b=7
let a = 30;
let b = 7;
console.log(a%b);
console.log((a-(a%b))/b);
