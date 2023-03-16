//object คือการเก็บค่าในตัวแปรเป็นกลุ่ม


let student = {
    name: "Alice",
    age: 23,
    major: "Information Technology",
    GPA: 3.78
}

//การเอาค่าใส่เข้าไปในตัวแปร

let student2 = {}
console.log(student2);
student2.name = "Bom"  //วิธีแรก พิมพ์ชื่อ field ลงไปก่อนแล้ว = ค่า
student2['age'] = 22  //วิธีสอง ใช้เปิดปิดวงเล็บแล้วก็ซิงเกิ้ลโควตกับชื่อ feild แล้ว = ค่า
console.log(student2) //การเรียกดูทั้งกลุ่ม
console.log(student2.name) //การเรียกดูเฉพาะ name
console.log(student2['age'])


//การเอาค่าใน object มาใช้

// let name = student.name
// let age = student.age
// let major = student.major
// let gpa = student.GPA

let { name, age, major, GPA } = student
console.log(name, age, major, GPA)

// อีกวิธีในการเพิ่มค่าเข้าไปใน object
Object.assign(student, { admission: "20/06/2020" })
console.log(student)

// เอา object มารวมกันได้
let info = {
    isus: 12345679,
    graduate: "09/03/2022"
}
Object.assign(student, info) //student รวมกัน info
console.log(student)

//key คือเอาหัวข้อใน object ออกมาโชว์ จะแสดงในรูปแบบ array
console.log(Object.keys(student))

//object.values คือเอา value ที่อยู่ใน object ออกมาแสดง
console.log(Object.values(student))

////////// ส่วนใหญ่แล้ว object จะถูกเก็บอยู่ใน array

let studentInfo = [{
    name: "Kuy",
    age: 23,
    major: "ENG",
    GPA: 3.78
},
{
    name: "Sus",
    age: 23,
    major: "Information Technology",
    GPA: 3.5
},
{
    name: "Alice",
    age: 23,
    major: "IASD",
    GPA: 1.50
}]

/// วิธีเอามาใช้
for (let index = 0; index < studentInfo.length; index++) {
    if (studentInfo[index].GPA > 2) {
        console.log("PASS")
    } else {
        console.log("NOT PASS")
    }

}

//เลือกตำแหน่ง index แล้วชี้เข้าไปที่ keys แล้วเอาค่า value ออกมาแสดง