// การบ้าน

function getFreqOfWords(sentence) {
  if (sentence === null || sentence === undefined) {
    return undefined
  }

  let words = sentence.toLowerCase().split(" ")

  let Obj = {}

  for (let word of words) {
    if (Obj[word]) {
      Obj[word] += 1
    } else {
      Obj[word] = 1
    }
  }

  return Obj
}

console.log(getFreqOfWords('Today is present and present is your gift'))
// { today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }

console.log(getFreqOfWords('Do you best just do it'))
// { do: 2, you: 1, best: 1, just: 1, it: 1 }

console.log(getFreqOfWords(null))
// undefined

console.log(getFreqOfWords(undefined))
// undefined


// ----------------------------------------------------

function whoami(firstname = "เปมิกา", lastname = "ป่าไม้ทอง", nickname = "เจีย") {
  return `สวัสดี ฉันชื่อ ${firstname} นามสกุล ${lastname} เรียกฉันว่า ${nickname} ก็ได้ ยินดีที่ได้รู้จัก ไว้เจอกันนะคะ`
}

console.log(whoami()) //จะแสดงค่า default
console.log(whoami("อานนท์")) //จะเปลี่ยนไปแค่ firstname
console.log(whoami("ฉัตรติยา", "ทรงประกอบ", "เฟียส")) // ใส่ข้อมูลครบจะแสดงทั้งหมด ไม่มีค่า default
console.log(whoami(undefined, null, "ยู")) //จะเปลี่ยนไปแค่ nickname


function sum(x,y,...z) {
    let sumsrgu = 0
    for (srgu of arguments){
        sumsrgu += srgu
        
    }return sumsrgu
}

console.log(sum(1,2,3,4,5,6,7,8));

function words(x,y,...z) {
    let sumword = ''
    for (w of arguments){
        sumword += w
        sumword+=" "
    }return sumword
}
console.log(words('pamika','pam','jia'));

function arrayAdd2([x1, y1], [x2, y2]) {
return x1 + x2 + y1 + y2
}
console.log(arrayAdd2([1, 2], [3, 4]))

function arrayAdd3([x1, y1], [x2, y2]) {
return [x1 + x2, y1 + y2]
}
console.log(arrayAdd3([1, 2], [3, 4]))


