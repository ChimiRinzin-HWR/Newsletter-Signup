const subscribe = document.querySelector(".subscribe");
const dismiss = document.querySelector(".dismiss");
const email = document.querySelector(".email");
const form = document.querySelector("form");

const color = getComputedStyle(document.documentElement).getPropertyValue('--Grey');

const invalid = document.querySelector(".invalid"); 

const main = document.querySelector("main");
const section = document.querySelector("section");

const givenemailh = document.querySelector(".specificemail");

const regex = /^[\w]+@[\w]+\.[\w]+/g;

subscribe.addEventListener("click", myfunction);

var givenemail = "";
function myfunction(event){
    event.preventDefault();
    if(email.value.search(regex) === -1){
        invalid.style.display = "block";
        email.style.border = "2px solid red";
        email.style.backgroundColor = "rgb(255, 240, 240)";
    }
    else{
        invalid.style.display = "none";
        email.style.border = `1px solid ${color}`;
        email.style.backgroundColor = "white";
        givenemail = email.value;
        main.style.display = "none";
        givenemailh.textContent = givenemail;
        section.classList.add("tmode");
        email.value = "";
    }
}

dismiss.addEventListener("click", function(){
    section.classList.remove("tmode");
    main.style.display = "flex";
})