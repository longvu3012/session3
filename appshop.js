
// Ex3
// let menu = [`Jeans`,`T-Shirt`,`Socks`];
// do{
//     let a = alert(prompt("Hi there, welcome to shop admin panel, what do you want(R,C,U,D)"));
//     switch(a){
//     case `R`: 
//         console.log(menu);
//         break;
//     case `C`:
//         let newitem = prompt("Enter the name of the new item:");
//         menu.push(newitem);
//         console.log(menu);
//         break;
//     case `U`:
//         let b= Number(prompt(`Enter the position you want to update`));
//         let c= prompt(`Enter the new name`);
//         alert("Done");
//         menu(b)=c;
//         break;
//     case `D`:
//         let d= Number("Enter the position you want to delete");
//         alert("Done");
//         menu.splice(d,1);
//         break;
//     default :
//         console.log(`This command is not supported`);
//         break;
//     }
// }while(a != `R`);

//Ex5:
// let a = prompt("Mời bạn nhập các số muốn tính tổng cách nhau bằng dấu phẩy");
// let b = a.split(',');
// let sum = 0;
// for ( let i=0; i<b.length; i++){
//     sum = sum + Number(b[i]);
// }
// console.log(sum);

//Ex6:
// let a = prompt(`Moiwf bạn nhập các số để tìm giá trị nhỏ nhất`);
// let b = a.split(',');
// let min = Number(b[0]) ;
// for ( let i ; i < b.length; i++){
//     if(b[i]< min){
//         min = b[i];
//     }
// }
// console.log(min);

//Ex7:
// let array = [1,4,9,10,15,99];
// let a = prompt("Please enter a number you want to check");
// if( a === array){
//     let b = array.indexOf(a);
//     console.log(`${a} is found in my array at index ${b}`);
// }else {
//     console.log(`${a} is not found in my array.`);
// }

//Ex8
// let sheepSize = [5,7,300,90,24,50,75];
// console.log("Hi, my name is Duy and here is my sheep sizes :");
// console.log(...sheepSize);
// let max = Math.max(...sheepSize);
// console.log(`Now my biggest sheep has size ${max}, let's shave it`);
// sheepSize[sheepSize.indexOf(max)] = 8;
// console.log(...sheepSize);
// for (i = 0; i < 2; i++) {
//      console.log(`Month ${i + 1}`);
//      console.log("One month has passed, my sheeps have grown, here are their sizes :");
//      for(let i = 0; i < sheepSize.length; i++) {
//      sheepSize[i] = sheepSize[i] + 50;
//      }
//      console.log(...sheepSize);
//      let max = Math.max(...sheepSize);
//      console.log(`Now my biggest sheep has size ${max}, let's shave it`);
//      sheepSize[sheepSize.indexOf(max)] = 8;
//      console.log(...sheepSize);
// }
//     console.log(Month 3);
//     console.log("One month has passed, my sheeps have grown, here are their sizes :");
//     for(let i = 0; i < sheepSize.length; i++) {
//             sheepSize[i] = sheepSize[i] + 50;
//     }
//     console.log(...sheepSize);
//     let sum = 0;
//     for (i = 0; i < sheepSize.length; i++) {
//         sum += sheepSize[i];
//     }
// console.log(`My flock has size in total : ${sum}`);
// console.log(`I would get ${sum} * 2$ = ${sum * 2}$ `);

//Ex9:

//Turtle JS:
// color("red");
// for( i=0; i<4; i=i+1){
// fd(20);    
// rt(90);
// }
// color("gray");
// for( i=0; i<4; i=i+1){
// fd(40);
// rt(90);
// }
// color("blue");
// for( i=0; i<4; i=i+1){
// fd(80);
// rt(90);
// }
// color("purple");
// for( i=0; i<4; i=i+1){
// fd(160);
// rt(90);
// }

//Ex10:
// let tenNguoi = prompt(`Enter a sequence of names, seperated by commas (,)`);
// let tenArray = tenNguoi.split(',');
// console.log(tenArray);
// let result1 = tenArray.map((num) => "<" + num + ">");
// // let result1 = tenArray.map(num)
// let result = result1.toString();
// console.log(result);
//  alert(`${tenNguoi} => ${result}`);

//Ex11:
// let dayso = prompt("Enter a sequence number, seperated bhy commas (,)") ;
// let b  = dayso.split(",").map(Number);
// console.log(b);
// let le = b.filter(num => num % 2 != 0);
// let find = b.find(num => num % 2 == 0);
// alert(`${dayso} => Odd : ${le}`);
