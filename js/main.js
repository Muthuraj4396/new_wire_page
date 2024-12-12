// console outfunction
var nameDetailUpdateButton = document.getElementById("update_button");
var nameinput = document.getElementById("get_name");
var designinput = document.getElementById("get_design");
var emailinput = document.getElementById("get_email");
var phoneinput = document.getElementById("get_ph");

// namedetail outfunction
var nameoutput = document.getElementById("output_name");
var emailoutput = document.getElementById("output_email");
var designoutput = document.getElementById("output_design");
var phoneoutput = document.getElementById("output_phone");
function printTestMessage(){
    nameDetailUpdateButton.style.backgroundColor = "red";
    console.log(nameinput.value)
    console.log(designinput.value)
    console.log(emailinput.value)
    console.log(phoneinput.value)
    nameoutput.innerHTML=nameinput.value;
    emailoutput.innerHTML=emailinput.value;
    designoutput.innerHTML=designinput.value;
    phoneoutput.innerHTML = phoneinput.value;
}
nameDetailUpdateButton.addEventListener("click",printTestMessage);   
    
    