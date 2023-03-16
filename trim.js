//trim คำสั่งเอาไว้ตัดคำที่ต้องการ

let text = "            Hello world        "
console.log(text.trim())  //สั่งให้ลบช่องว่าง

// split เอาไว้แยกคำ แล้วแปลงไปเป็น array
let movie_name = "spider man no way home"
let movie_name1 = "spider,man,no,way,home"
console.log(movie_name.split(" ")) //สั่งให้แยกด้วยช่องว่าง
console.log(movie_name1.split(",")) //สั่งให้แยกด้วยลูกน้ำ หรืออะไรก็แล้วแต่จะใส่
console.log(movie_name1.split(",")[1]) //สามารถเข้าถึง array ได้ด้วยการใส่ตำแหน่ง index

//repeat
console.log(movie_name.repeat(3)) //คำสั่งทำซ้ำ

//replace แทนที่
console.log(movie_name.replace("man", "girl")) //เปลี่ยนคำว่า man ให้เป็น girl

//startWith เช็คว่า string ขึ้นต้นด้วยเงื่อนไขของเราไหม

console.log(movie_name.startsWith("spider")) //ขึ้นต้นถูกต้อง true
console.log(movie_name.startsWith("aaa")) //ขึ้นต้นไม่ถูกต้องโชว์ false

//includes เอาไว้เช็คว่า string ของเรามีคำนี้อยู่หรือไม่
console.log(movie_name.includes("home"))  // มีคำว่า home => true
console.log(movie_name.includes("qweqweqw")) //ไม่มีคำนี้ false

//upperCase ทำให้ทุกตัวเป็นตัวใหญ่
console.log(movie_name.toUpperCase())
//loweCase ทำให้ทุกตัวเป็นตัวเล็ก
console.log(movie_name.toLowerCase())

//substring
console.log(movie_name.substring(0, 6)) //เริ่มตัดที่ 0-6 (ตัวอักษรระหว่าง 0-6) spider



// .trim() ไว้สำหรับการลบ white space

// .split() ไว้สำหรับแยกคำตามเงื่อนไขที่กำหนด

// .repeat() ไว้สำหรับทำซ้ำ

// .replace() ไว้สำหรับการแทนที่

// .startWith() ไว้สำหรับการเช็คคำขึ้นต้น

// .includes() ไว้สำหรับการค้นหาคำว่ามีในตัวแปรนั้นหรือไม่

// .toUpperCase() ไว้สำหรับการ convert ข้อมูให้เป็นตัวพิมพ์ใหญ่

// .toLowerCase() ไว้สำหรับการ convert ข้อมูให้เป็นตัวพิมพ์เล็ก

// .substring() ไว้สำหรับการตัดคำ

