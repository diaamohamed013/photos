var firstNameInp = document.getElementById("firstName");
var lastNameInp = document.getElementById("lastName");


function sayName() {
    var fullName = firstNameInp.value + " " + lastNameInp.value;
    document.getElementById("demo").innerHTML = "Welcome " + fullName; 
}
