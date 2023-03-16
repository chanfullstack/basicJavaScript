let arr = ["tiger", "lion", "bird", "fish", "cat"]

// // ตำแหน่งขอ Array ใช้ index เริ่มที่ 0,1,2,3,...,n
// // lenght = 5 ความยาวจะนับเริ่มจาก 1 แต่ตำแหน่งจะเริ่มจาก 0

// //push เอาไว้เพิ่มค่าใน Array จะเพิ่มไปที่ตำแหน่งสุดท้าย เพิ่มต่อไปเรื่อยๆ
// arr.push("elephant")
// arr.push("dog")
// console.log(arr.length)
// console.log(arr)

// // pop = เอาตัวสุดท้ายออกจาก arrey

// arr.pop()
// arr.pop()

// console.log(arr)

// //lenght คำสั่งเช็ค lenght (ความยาว) ของ array

// console.log(arr.length)

// //unshift จะเพิ่มค่าเข้าไปใน array (เพิ่มเข้าไปด้านหน้า)
// arr.unshift("Elephant")
// console.log(arr)


// // shift ดึงค่าจาก array ตัวแรกออก
// arr.shift()
// console.log(arr)

// //add value between array
// let arr1 = ["Shark", ...arr, "Crocodile"]
// let arr2 = ["Shark", "Crocodile", ...arr]
// let arr3 = arr.join(arr)
// // วิธี Join จะทำให้ค่าที่ได้เป็น String
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)


// //Slice แบ่งออกเป็น2แบบ จากหน้าไปหลัง จากหลังไปหน้า
// //อยากได้ lion - cat
// let sliceStart = arr.slice(1, 5)
// //ที่ต้องเอา 1-5 เพราะ slice ไม่เอาตัวสุดท้าย เอาแค่ 1-4
// console.log(sliceStart)

// // จากหลังไปหน้า
// let sliceEnd = arr.slice(-4, -2)
// console.log(sliceEnd)

// //index0f เอาไว้หาค่าว่าอยู่ใน index ที่เท่าไร

// console.log(arr.indexOf("bird"))


//sort ใช้เรียงเลขใน array
let sortArr = [3, 4, 2, 5, 1, 8, 6, 7, 9]
console.log(sortArr.sort())

//for เอาไว้เรียกค่าใน array มาใช้ไปเรื่อยๆ แล้วแต่เงื่อนไข คล้ายๆลูป
for (let index = 0; index < array.length; index++) {
    const element = array[index];

}


while (condition) {

}