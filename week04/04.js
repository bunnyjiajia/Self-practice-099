const words = ["Pemika", "anon", "ChaTiyA", "YoU"]
const found = words.filter(element => element.toUpperCase().includes("CHATIYA"))
console.log(found)

const number = [12, 7, 5, 20, 33, 42]
const even = number.filter(element => element % 2 === 0)
console.log(even)

const names = ["Apple", "banana", "Avocado", "cherry", "apricot"]
const startsWithA = names.filter(element => element[0].toUpperCase() === "A")
console.log(startsWithA)

const words2 = ["hello", "wow", "amazing"]
const withExclamation = words2.map(element => element + "!")
console.log(withExclamation)


// แสดงเลขคู่ระหว่าง 1–20
for (let i = 2; i <= 20; i += 2) {
  console.log(i)
}

// หาค่ามากที่สุดใน array
const nums = [12, 25, 7, 42, 18]
let max = nums[0]
for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i]
  }
}
console.log(max)

// Bubble Sort
const numbers = [42, 12, 89, 7, 25]

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - i - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j]
      numbers[j] = numbers[j + 1]
      numbers[j + 1] = temp
    }
  }
}

console.log(numbers)

// หา Duplicate ในอาเรย์
const num = [1, 5, 2, 5, 7, 2, 9, 1]
let duplicates = []

for (let i = 0; i < num.length; i++) {
  for (let j = i + 1; j < num.length; j++) {
    if (num[i] === num[j] && !duplicates.includes(num[i])) {
      duplicates.push(num[i])
    }
  }
}

console.log(duplicates)

// นับจำนวนสระใน string
const word = "communication"
let vowels = "aeiou"
let count = 0
for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word[i])) {
    count++
  }
}
console.log(count)

// ตารางสูตรคูณแม่ 2–x
let x = 12
for (let i = 2; i <= x; i++) {
  console.log("แม่ " + i)
  for (let j = 1; j <= 12; j++) {
    console.log(i + " x " + j + " = " + (i * j))
  }
}

