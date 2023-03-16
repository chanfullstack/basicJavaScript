let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}



// do-while loop


let num = 0;
do {
    // do action
    num = num + 2;
    console.log("do action:", num);

} while (num == 1);  // (1) action , (2) false => stop

//fot loop

// for (declaration;condition;loop action)
for (let i = 0; i <= 12; i = i + 1) {
    console.log(i);
}

console.log("BEAKKKKKKKKKKKKKK")

//break
while (true) {
    console.log("Hello")
    break
    //ถ้าไม่มี break จะทำ Hello ไปเรื่อยๆ
}
