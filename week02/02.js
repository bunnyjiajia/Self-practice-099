// การบ้าน

let book1 = {
    isbn: 123456789,
    title:"JavaScript",

}
let book2 = {
    isbn: 123456789,
    title:"JavaScript",

}

function shallowEquality(object1, object2) {
    const keys1=Object.keys(object1)
    const keys2=Object.keys(object2)

    if (keys1.length !== keys2.length) {
        return false
    }
    for (let key of keys1){
        if (object1[key] !== object2[key]) {
            return false
        }
        
    }
    return true

}
console.log("shallow Equality: "+ shallowEquality(book1,book2));





// ---------------ฝึกเอง-------------------

let arrays = ["jia", 99,9.9,false, {firstName:"Pemika", lastName:"Pamaithong"}, ["j", "i", "a"]]
 
for (let i = 0; i < arrays.length; i++) {
    let c = arrays[i]
    if ( typeof c === 'object' && c !== null ) {
        if (Array.isArray(c)) {
            console.log(`${i+1}:`)
            for (let k of c ) {
                console.log(`${k}`);}
        }else{
            console.log(`${i+1}:`)
            for (j in c ) {
                console.log(`${j} : ${c[j]}`);
            }
        }
    }else{
        console.log(`${i+1}: ${arrays[i]}`);
    }
    
}



// Input: "hello"
// Output: "olleh"

// 1. Reverse String
// เขียนฟังก์ชันที่รับ string มาแล้วคืนค่าเป็น string ที่กลับด้าน
// function reverseString(word) {
//     return word.split('').reverse().join('')
// }

// console.log(reverseString("hello"));

// 3. Count Vowels
// เขียนฟังก์ชันที่นับจำนวนตัวอักษรสระ (a, e, i, o, u) ใน string ที่รับเข้ามา

// Input: "education"
// Output: 5

// function Vowels(Vowel) {
//     const Vowels = 'aeiouAEIOUU'
//     let count = 0

//     for (let char of Vowel) {
//         if(Vowels.includes(char)){
//             count++
//         }
//     }
//     return count
// }

// console.log(Vowels("education"));

// let v = "a"
// let l = "n"
// let lo = "Pamika Pamaithong"
// let indexOfL = lo.lastIndexOf(l); // 5
// let indexOfV = lo.indexOf(v); // 5

// // ตัด string จาก index นั้นไปจนจบ
// let k = lo.slice(indexOfV+v.length,indexOfL);

// console.log(k);


// function rightTriangle(side1,side2) {
//     return Math.sqrt(side1 * side1 + side2 * side2);
// }

// var sideA = -5;
// var sideB =12;

// var sideC = rightTriangle(sideA,sideB);

// console.log(sideC);


// -----------------------------------------------------------

// let num = Infinity
// console.log(num+5);


// console.log(Number.isFinite(num));


// var v;

// console.log(typeof v);
// console.log(v === undefined);

// let x ="123"
// y = Number(x)
// console.log(y);


// let e = 5 ;
// e = 6 ;
// var s = 5;
// var s = 6;
// var r = null ;



// console.log(e);

// console.log(5-"4" +3 *6**1**2/4+"1");
// console.log(5-"4" +3 *6**1**2/4+"1");


// console.log(true && "Hello");
// console.log(true && "Hello");
// console.log(true && "Hello");
// console.log(true/0.25-!false);
 




