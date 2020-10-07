/*var firstName = 'Mohammad';
var LastName = "AlDaboubi";
var age = 25;
var fullAge = true;
console.log(firstName + ' ' + LastName + ' is' + ' ' + age );
console.log(fullAge);

var job, isMarried; 
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. is he married? ' + isMarried);

//variable mutation
age = 'twenty five';

console.log(age);
alert(firstName + ' is a ' + age + ' year old ' + job + '. is he married? ' + isMarried);
var lastName = prompt('What is his last name? ');
console.log(firstName + ' ' + lastName);*/

//Basic Operators 

/*var year, yearJohn, yearMark;
now = 2020;
ageJohn = 29;
ageMark = 33;
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(ageJohn);
console.log(now + 44);
console.log(now * 4);
console.log(now / 10);

//logical operator
var johnOlder = ageJohn < ageMark;

console.log(johnOlder);

//typeof operator
console.log(typeof now);*/

//Operaor Precedence

/*var now = 2020;
var yearJohn = 1995;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; 

console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark)/2; 
console.log(average);


//Muliple Assignment; 

var x, y; 
x = y = (3 + 5) * 4 - 6; 
console.log(x, y);

//More operator 
x *= 2; 
console.log(x);
x += 1; */
  
//If / else statement. 

// var firstName = 'John';
// var civilStatus = 'single';
// var isMarried = true; 

// if(isMarried)
// {
//     console.log(firstName + ' is married');
// }
// else 
// {
//     console.log(firstName + ' is single');
// }

// var heightMark, heightJohn, massMark, massJohn, markBMI, johnBMI;
// heightMark = 1.78;
// heightJohn = 1.80;
// massJohn = 120;
// massMark = 94; 
// markBMI = massMark / (heightMark * heightMark);
// johnBMI = massJohn / (heightJohn * heightJohn);

// var More = markBMI >= johnBMI;

// if (markBMI > johnBMI)
// {
//     console.log('Mark BMI is higher');
// }
// else
// {
//     console.log('Johns BMI is higher');
// }
// console.log('Mark BMI is: ' + markBMI + ' and John BMI is : ' + johnBMI + ' Mark mass being higher than Johns is: ' + More);


//Boolean Logic
// var firstName = 'John';
// var age = 21;

// if (age < 13){
//     console.log('Johns is a child');
// }
// else if (age >= 13 && age <= 20){
//     console.log('John is a teenager');
// }
// else if (age >= 20 && age < 30) {
// console.log('JOHN IS A YOUNG MAN!!!'); 
// }
// else {
//     console.log('Johns is a grown ass man.')
// }



//Ternary operator 

// var firstName = 'John';
// var age = 16;

// age >= 18 ? console.log('John can drink beer')
// : console.log(firstName + ' Drinks Juice');

// var drink = age >= 18 ? 'beer' : 'juice';

// console.log(drink);


// Switch Statment 
// var job = 'instructor'; 
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teacher kids how to code.');
//         break;
//     case 'driver':
//         console,log(firstName + ' driver is an uber noob');
//         break;
//     case 'designer':
//         console.log(firstName + ' designer beautiful websites.');
//         break;
//     default:
//         console.log(firstName + 'He is jobless');
// }

//  var firstName = 'John';
//  var age;

// if (age < 13){
//     console.log('Johns is a child');
// }
// else if (age >= 13 && age <= 20){
//     console.log('John is a teenager');
// }
// else if (age >= 20 && age < 30) {
// console.log('JOHN IS A YOUNG MAN!!!'); 
// }
// else {
//     console.log('Johns is a grown ass man.')
// }

// switch(true){
//     case age < 13:
//         console.log('John is a kid');
//         break;
//     case age >= 13 && age <= 20:
//         console.log('John is a teenager');
//         break;
//     case age > 20 && age < 30:
//         console.log('John is a young man');
//         break;
//     case age > 30:
//         console.log('John is an old man');
//         break;
//     default:
//         console.log('John age is unknown');
// }

//Truthy and falsy valyes and equality operators 
// falsy values : undefined, null, 0, '', NaN
// truthy values: NOT falsy valus

// var height = 23; 

// if (height || height === 0){
//     console.log('Variable is defined');
// }
// else {
//     console.log ('variable is not defined');
// }

// //Equal operator

// if (height == '23'){
//     console.log('The == operator does type coercion!');
// }


// var johnTeam, mikeTeam, maryTeam, johnAverage, mikeAverage, maryAverage;
// johnTeam = 'John Team';
// mikeTeam = ' Mike Team';
// maryTeam = 'Mary Team';

// johnAverage = (100 + 100 + 100) / 3;
// mikeAverage = (100 + 100 + 100) / 3;
// maryAverage = (100 + 100 + 100) / 3;

// switch (true){
//     case mikeAverage < johnAverage:
//         console.log(johnTeam + ' wins the basketball game, they have an average score of ' + johnAverage);
//         break;
//     case mikeAverage > johnAverage:
//         console.log(mikeTeam + ' wins the basketball game, they have an average score of ' + mikeAverage);
//         break;
//     case mikeAverage === johnAverage:
//         console.log(mikeTeam + ' and' + johnTeam + ' draw in their basketball game they both scored respectively ' + mikeAverage + ' and' + johnAverage);
//         break;
//     default:
//         console.log('No information');    
// }


// if( maryAverage > johnAverage && maryAverage > mikeAverage){
//     console.log(maryTeam + ' whooped both john and mike asses! her team score was: ' + maryAverage);
// }
// else if (johnAverage > maryAverage && johnAverage > mikeAverage){
//     console.log(johnTeam + ' whooped both john and mike asses! her team score was: ' + johnAverage);
// }
// else if (maryAverage === johnAverage && maryAverage === mikeAverage)
// {
//     console.log('it is a draw');
// }
// else{
//     console.log(mikeTeam + '  whooped both john and mike asses! her team score was: ' + mikeAverage);
// }

//functions 

// function calculateAge(birthYear){
//     return 2020 - birthYear;
// }

// var ageJohn = calculateAge(1995);
// console.log(ageJohn);

// function add(x,y){
//     return x + y;
// }

// var res = add(9,9);
// console.log(res);

// function retirment(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     console.log(firstName + ' retires in ' + retirement + ' years.');
// }

// retirment(1995, 'Mohammad');

//function statement and expression
// //function declaration 
// function whatDoYouDo(job,firstName){

// }
//function expression
// var whatDoYouDo = function(job, firstName) {
//     switch(job){
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives people around';
//         case 'designer':
//             return firstName + ' designes stuff';
//     }
// }

// console.log (whatDoYouDo('designer', 'Mohammad'));
// console.log (whatDoYouDo('teacher', 'Mohammad'));
// console.log (whatDoYouDo('driver', 'Mohammad'));

//Arrays

// var names = ['john', 'Mark', 'Jane'];
// var years = new Array(1998, 1969, 1995);

// console.log(names.length);

// names[1] = 'ben';
// console.log(names);


// names[names.length] = 'Mary';
// console.log(names);

// // different data types

// var john = ['John', 'Smith', 1995, 'programmer', false];

// john.push('blue');
// john.unshift('red');
// console.log(john);

// john.pop();
// john.shift();
// console.log(john);
// console.log(john.indexOf(1995));

// var isDesigner = john.indexOf('designer')  === -1 ? 'John is not a designer' : 'John is a designer';
// console.log(isDesigner);
// var bill = [124, 48, 268];
// var total = [];

// function tips (bill){
//     var percentage;
//     if (bill <= 50)
//     {
//       percentage = 0.2;
//     }
//     else if (bill >= 50 && bill <= 200)
//     {
//         percentage = 0.15
//     }
//     else if (bill > 200)
//     {
//        percentage = 0.1;
//     }
//     total.push(bill * percentage);
//     return bill * percentage;
// }


// for (var num = 0; num < 3; num++)
// {
//     console.log(tips(bill[num]));
// }
// console.log(total);


// console.log(tips (bill[2]));
// console.log(total);

//Objects and Properties
//Object Literal
// var mohammad = {
//     firstName: 'Mohammad',
//     lastName: 'AlDaboubi',
//     girlFriend: 'Maryam',
//     birthYear: 1995,
//     family: ['Tariq', 'Omar', 'Hala', 'Nada'],
//     job: 'Programmer',
//     isMarried: false
// }

// console.log(mohammad.firstName + ' Lovely girlfriend name is ' + mohammad.girlFriend);
// console.log(mohammad['girlFriend']);
// var x = 'birthYear';
// console.log(mohammad[x]);
// mohammad.job = 'Designer';
// mohammad['isMarried'] = true;
// console.log(mohammad);

// //new Object syntax
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1992;
// jane['lastName'] = 'Smith';

// console.log(jane);

//Object and Methods
// var mohammad = {
//     firstName: 'Mohammad',
//     lastName: 'AlDaboubi',
//     girlFriend: 'Maryam',
//     birthYear: 1990,
//     family: ['Tariq', 'Omar', 'Hala', 'Nada'],
//     job: 'Programmer',
//     isMarried: false,
//     calcAge: function(birthYear){
//         this.age = 2020 - this.birthYear;
//     }
// };

// mohammad.calcAge();
// console.log(mohammad);

// var john = {
//     fullName : 'John Smith',
//     mass : 203,
//     height: 1.78,
//     calcBmi: function(mass, height){
//         this.BMI = this.mass / (this.height * this.height)
//         return this.BMI;
//     }
// };

// var mark = {
//     fullName : 'Mark Smith',
//     mass : 96,
//     height: 1.83,
//     calcBmi: function(){
//         this.BMI = this.mass / (this.height * this.height)
//         return this.BMI;
//     }
// };


// if (john.calcBmi() < mark.calcBmi()){
//     console.log(john.fullName + ' has lower BMI than ' + mark.fullName);
// }
// else if (john.calcBmi() === mark.calcBmi()){
//     console.log('Both have the same BMI!!');
// }
// else{
//     console.log(mark.fullName + ' has lower BMI than ' + john.fullName);
//     }


// console.log(john);
// console.log(mark);


// Loops and iteration
// var john = ['John', 'Smith', 1995, 'designer', false];

// for (var i = 0; i < john.length; i++){
//     console.log(john[i]);
// }

// var i = 0;
// while(i < john.length){
//     console.log(john[i]);
//     i++;
// }

// continue and break statements
var john = ['John', 'Smith', 1995, 'designer', false, 'red'];

// for (var i = 0; i < john.length; i++){
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// for (var i = 0; i < john.length; i++){
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

// for (var i = john.length - 1; i >= 0; i-- )
// {
//     console.log(john[i]);
// }

//Create a tip calculator using the objects and loops
var john = {
    firstName: 'John',
    bill: [124, 48, 268, 180],
    calcTip: function (){
        var bills = this.bill;
        this.tips = [];
        this.finalBill = [];
        for (var i =  0; i < this.bill.length; i++){
            if (this.bill[i] < 50){
                var tip = this.bill[i] * 0.2;
                this.tips.push(tip);
                this.finalBill.push(tip + this.bill[i])
            }
            else if(this.bill[i] >= 50 && this.bill[i] <= 200){
                var tip = this.bill[i] * 0.15;
                this.tips.push(tip);
                this.finalBill.push(tip + this.bill[i])
            }
            else if (this.bill[i] > 200){
                var tip = this.bill[i] * 0.1;
                this.tips.push(tip);
                this.finalBill.push(tip + this.bill[i]);
            }
            else {
                console.log('Error 101');
            }
        }
        return this.tips, this.finalBill;
    }
};

var mark = {
    firstName: 'mark',
    bill: [77, 375, 110, 45],
    tips: [],
    finalBill:  [],
    calcTip: function (){
        var bills = this.bill;
        for (var i =  0; i < this.bill.length; i++){
            if (this.bill[i] < 100){
                var tip = this.bill[i] * 0.2;
                this.tips.push(tip);
                this.finalBill.push(tip + this.bill[i])
            }
            else if(this.bill[i] >= 100 && this.bill[i] <= 300){
                var tip = this.bill[i] * 0.15;
                this.tips.push(tip);
                this.finalBill.push(tip + this.bill[i])
            }
            else if (this.bill[i] > 300){
                var tip = this.bill[i] * 0.25;
                this.tips.push(tip);
                this.finalBill.push(tip + this.bill[i]);
            }
            else {
                console.log('Error 101');
            }
        }
    }
};

john.calcTip();
mark.calcTip();
console.log(john);
console.log(mark);


function average (tips){
    var store = 0;
    var average;
    for (var i = 0; i < tips.length; i++){
       console.log(tips[i]);
       store = store + tips[i];
    }
    average = store/tips.length;
    return average;
}

john.average = average(john.tips);
mark.average = average(mark.tips);

if (john.average > mark.average){
    console.log(john.firstName + ' average tip is ' + john.average + ' which is more than ' + mark.firstName + ' tips which is ' + mark.average);
}
    else{
        console.log(mark.firstName + ' average tip is ' + mark.average + ' which is more than ' + john.firstName + ' tips which is ' + john.average);
    }

console.log(john);







