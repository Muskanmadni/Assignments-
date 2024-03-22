// Name cases: store person's name in variable then print the person's name in lowercase , uppercase and titlecase
var personName = "jackson";
//print in lowercase
var lowercase = personName.toLowerCase();
console.log(lowercase);
//print in uppercase 
var uppercase = personName.toUpperCase();
console.log(uppercase);
//print in titlecase
var Name = personName.split(" ");
var titlecase = "";
for (var i = 0; i < Name.length; i++) {
    titlecase += Name[i].charAt(0).toUpperCase() + Name[i].slice(1).toLowerCase();
}
;
console.log(titlecase);
