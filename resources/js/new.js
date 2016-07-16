//
// function myFunction() {
//     var x, text;
//
//     // Get the value of the input field with id="numb"
//     x = document.getElementById("numb").value;
//
//     // If x is Not a Number or less than one or greater than 10
//     if (isNaN(x) || x < 1 || x > 10) {
//         text = "Input not valid";
//     } else {
//         text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
// }
// function validateForm() {
//     var x = document.forms["myForm"]["fname"].value;
//     if (x == null || x == "") {
//         alert("Name must be filled out");
//         return false;
//     }
// }
//
// function hello() {
//         var a ;
//         var b = '20';
//         var c = a + b ;
//         console.log('a', a, 'b', b, 'c', c);
//         alert(a+(+b));
// };
//
// function ref() {
//     var x = 10;
//     var y = x;
//     x = 20;
//     console.log(x, y);
//     z = 1;
//     b = [];
//     console.log(typeof b);
//     var string = 'adfk\'asdjhsadkjsahkj\'dskf';
//     alert(string);
// };
//
// function operator() {
//     var number = 5, number2 =6;
//     var a = number++;
//     console.log(number++, ++number);
//     console.log(a, number);
//     var b = ++number2;
//     console.log(b, number2);
//     var c = a++;
//     c += ++b;
//     console.log(c);
// };
//
// function object() {
//     var object = {};
//     var array = [];
//
//     object = {
//         data: {
//             access: 'adkfjasklfkalsfjalsdkf',
//             profile: {
//                 name: 'thanawat',
//                 surname: 'thangpibonnvest'
//             },
//             role: 'admin',
//             array: [
//                 1,2,3,4,5,6,7
//             ]
//         },
//         result: 0
//     };
//     array = [
//         object,object
//     ];
// };
//
// function beauty () {
//     var j =100;
//     for (var i = 1; i <= 50; i++) {
//         j--;
//         console.log(i);
//         console.log(i+1);
//         console.log(j);
//         console.log(j-1);
//         i++;
//         j--;
//     }
//     var x = 20;
//     switch (x) {
//         case 10: console.log('eiei');
//         case 20: console.log('wiwi');break;
//     }
// }
// beauty();
//
// function hello(x){
//     alert(x);
// }
// hello("little crocodile pipe");
//
// function conf () {
//     var x = confirm("KU");
//     if (x==true){
//         alert("hi sus");
//     }
//     else {
//         alert("bye bye");
//     }
// }
// conf();
//
// function prom () {
//     var x = prompt("kak");
//     alert(x);
// }
// prom();
// var point = 0;
// function pping(){
//     var a =[];
//     var question = ["9*8","2+2","9/3","6*6","9%3"];
//     for (var j=0;j<question.length;j++){
//         console.log(question[j]);
//          a[j] = prompt(question[j]);
//      }
//
//     var b = [72, 4, 3, 36 ,0];
//     for(var i=0;i<=a.length;i++){
//         if(a[i]==b[i]){
//             point+=1;
//         }
//     }
//     alert(point);
// }
// pping();
//
// var console2 = {};
// console2.test = function () {
//         alert("aaa");
// };
// console2.test();
// function work(){
//     var num1 = receive("input number 1 =");
//     var num2 = receive("input number 2 =");
//     var ans = cal1(num1, num2);
//     show(ans);
// }
// work();
// function receive(word){
//     return prompt(word);
//
// }
// function cal1(num1, num2){
//     return (+num1)+(+num2);
// }
// function show(ans){
//     alert(ans);
// }
//
// function work () {
//     var ans;
//     var num1 = prompt("input 1");
//     ans = +num1;
//     num1 = prompt("input 2");
//     ans = ans % (+num1);
//     alert(ans);
// }
// work();

// function work () {
//     var num1 = receiveAndMod("input 1 =");
//     if(!isNaN(num1)) {
//         var num2 = receiveAndMod("input 2 =");
//         if(!isNaN(num2)){
//             var ans = plus(num1, num2);
//             console.log(ans);
//             if(ans > 1) {
//                 ans = ans/2;
//             }
//             alert(ans);
//         }
//     }
// }
//
// function receiveAndMod (msg) {
//     var num = prompt(msg);
//     return (+num)%2;
// }
//
// function plus(x, y) {
//     return x+y;
// }
// work();
function work(){
   var ans = 0;
   var num =[];
   var count = +(prompt(" Do you want to input (0 exist)"));
   for (var i = 0; i < count; i++) {
        num[i] = +(prompt("input number "));
   }


   var oper = prompt("input operator ")
   alert(opera(oper, num));
 }
work();
function opera(oper,num){
    var ans = num[0];
    for (var i = 1; i < num.length; i++) {
        switch (oper) {
             case "+":ans = ans+num[i];
                        break;
             case "-":ans = ans-num[i];
                       break;
             case "*":ans = ans*num[i];
                        break;
             case "/":ans = ans/num[i];
                        break;
               case "%":ans =num1%num2
                        break;
              default:alert("error")
                      break;
          }
      }
      return ans;
}
