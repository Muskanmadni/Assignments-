// Name cases: store person's name in variable then print the person's name in lowercase , uppercase and titlecase

let personName: string ="jackson"

//print in lowercase

let lowercase: string = personName.toLowerCase();
console.log(lowercase)

//print in uppercase 

let uppercase: string = personName.toUpperCase();
console.log(uppercase)

//print in titlecase

let Name: string[] = personName.split(" ");
 
let titlecase: string =""

for (let i =0; i < Name.length; i++ ) {
    titlecase +=Name[i].charAt(0).toUpperCase()+Name[i].slice(1).toLowerCase();
    
};
console.log(titlecase)
