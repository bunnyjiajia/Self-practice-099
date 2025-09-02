// 1. แสดงรายชื่อนักเรียนที่คะแนนต่ำกว่า 60 แล้วเป็นตัวพิมพ์เล็ก
const failingNames = studentScores
  .filter(s => s.score < 60)
  .map(s => s.name.toLowerCase());
console.log(failingNames); // [ 'david' ]

// 2. หา student คนแรกที่คะแนนมากกว่า 80
const topStudent = studentScores.find(s => s.score > 80);
console.log(topStudent); // { name: 'Alice', score: 85 }

// 3. ตรวจสอบว่ามีนักเรียนคนไหนได้คะแนน 100
const hasPerfectScore = studentScores.some(s => s.score === 100);
console.log(hasPerfectScore); // false

// 4. รวมชื่อและอีเมลเป็น string ของแต่ละ student
const stdInfo = stds.map(s => `${s.name} <${s.email}>`);
console.log(stdInfo); 
// [ 'Tisanai <tisanai@sit.kmutt.ac.th>', 'Pornchai <pornchai@sit.kmutt.ac.th>', 'Suda <suda@sit.kmutt.ac.th>' ]

// 5. sort number array แบบมากไปน้อย
const array14Desc = [1, 30, 4, 21, 10000].sort((a,b) => b - a);
console.log(array14Desc); // [10000, 30, 21, 4, 1]

// 6. หา index ของ student ที่มี id มากที่สุด
const maxIdIndex = stds.findIndex(s => s.id === Math.max(...stds.map(x => x.id)));
console.log(maxIdIndex); // 1 (id=5 ของ Pornchai)

// 7. check ทุกค่าของ array ว่า < 50
const numbers = [10, 20, 30, 60];
const allLess50 = numbers.every(n => n < 50);
console.log(allLess50); // false

// 8. filter และ sort student ตามชื่อ alphabetically แล้วเอาเฉพาะ name
const sortedNames = stds
  .sort((a,b) => a.name.localeCompare(b.name))
  .map(s => s.name);
console.log(sortedNames); // [ 'Pornchai', 'Suda', 'Tisanai' ]

// 9. หา index ของตัวเลขตัวแรกที่เป็นเลขคี่
const nums = [2,4,6,7,8];
const firstOddIndex = nums.findIndex(n => n % 2 !== 0);
console.log(firstOddIndex); // 3
