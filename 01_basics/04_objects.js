// const instaUser = new Object(); one ways to define 

const instaUser = {};

instaUser.id = 1;
instaUser.name  = "Shubham";
instaUser.followers = 123
instaUser.email = "shubhamzingre6@gmail.com"
//console.log(instaUser);

const fbUser = {
    email:'Shubham@gmail.com',
    fullname:{
        userFullName: "shubham",
        lastName:'Zingare'
    }
}

//console.log(fbUser.fullname.userFullName);

const obj1 = {1: "a",2:"b"}
const obj2 = {3: "c", 4:"d"}
const obj3 = {5: "e", 6:"f"}

const obj4 = Object.assign({},obj1,obj2,obj3);

//console.log(obj4);

 const course = {
    coursename: "js in hindi ",
    price:  "999",
    courceInstructor:"Hitesh"
 }

 const {courceInstructor} = course

//  console.log(courceInstructor);