//objects destructuring and json api

const course={
    c_name:"js in hindi",
    price: "933",
    c_instructor:"hitesh"
}
// to access we have to write everytime
course.c_instructor;

 // but we can also use this 
 const {c_instructor}=course
 console.log(c_instructor);// no need for writing again and again course.c_instru....

 const {c_instructor: instr}=course
 
// json talks
/*
{
    "name":"hitesh",
    "course":"science",
    "price":"3234"
}

*/