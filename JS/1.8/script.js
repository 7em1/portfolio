//1


// let obj = {
//     name: "John",
//     surname: "Smith",

// }
// obj.name = "Pete";
// delete obj.name;


//2



// let human = {
//     name0: "John",
//     age: 15,
//     sex: "Male"
// }

// alert(human.name0);
// alert(human.age);
// alert(human.sex);



// //3


//Da mojno



//4


function  isEmpty(obj) {
  for(let key in obj){
    return false;
  }
  return true;
}

let obj = {};
alert(isEmpty(obj));

obj.name = "john";
alert(isEmpty(obj));



// //5

// let salaries = {
//     john: 100,
//     ann: 160,
//     pete: 130,
// }


// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];

// }

// alert(sum);